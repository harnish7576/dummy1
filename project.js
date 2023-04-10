const conn = new Mongo( `localhost:27017` ),
    db   = conn.getDB(  `Vehicles`  ),
    elecColl = db.getCollection( `electric` );
    geoColl = db.getCollection( `Geoelectric` );

    let result;


    // print('mongoimport --db Vehicles --collection electric --type csv --fields "VIN,County,City,State,PostalCode,ModelYear,Make,Model,ElectricVehicleType,CleanAlternativeFuelVehicleEligibility,ElectricRange,BaseMSRP,LegislativeDistrict,DOLVehicleID,longitude,latitude,ElectricUtility,CensusTract" --file data.csv')

    // print('mongoimport --db Vehicles --collection Geoelectric --type csv --fields "VIN,County,City,State,PostalCode,ModelYear,Make,Model,ElectricVehicleType,CleanAlternativeFuelVehicleEligibility,ElectricRange,BaseMSRP,LegislativeDistrict,DOLVehicleID,longitude,latitude,ElectricUtility,CensusTract" --file data.csv')

    geoColl.updateMany(
        {},
        [
          {
            $set:{
              location:{
                // use aggregation pipeline to populate 'location' 
                // with null if either lat or long are empty
                $cond:{
                  if: { $or: [
                    {$eq: ["$longitude",""]},
                    {$eq: ["$latitude",""]}
                  ]},
                  then: null,
                  else: {
                    type: `Point`,
                    // note longitude is first.
                    coordinates: ["$longitude", "$latitude"]
                  }
                }
              }
            }
          },
          {
            $unset: [`longitude`, `latitude`] // remove old properties
          }
        ]
      )



    // print(mongofiles --);

