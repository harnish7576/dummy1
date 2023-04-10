const conn = new Mongo( `localhost:27017` ),
    db   = conn.getDB(  `Vehicles`  ),
    elecColl = db.getCollection( `electric` ),
    geoColl = db.getCollection( `Geoelectric` );

    let result;


    // print('mongoimport --db Vehicles --collection electric --type csv --fields "VIN,County,City,State,PostalCode,ModelYear,Make,Model,ElectricVehicleType,CleanAlternativeFuelVehicleEligibility,ElectricRange,BaseMSRP,LegislativeDistrict,DOLVehicleID,longitude,latitude,ElectricUtility,CensusTract" --file data.csv')

    // print('mongoimport --db Vehicles --collection Geoelectric --type csv --fields "VIN,County,City,State,PostalCode,ModelYear,Make,Model,ElectricVehicleType,CleanAlternativeFuelVehicleEligibility,ElectricRange,BaseMSRP,LegislativeDistrict,DOLVehicleID,longitude,latitude,ElectricUtility,CensusTract" --file data.csv')
    
    // geoColl.updateMany(
    //     {},
    //     [
    //       {
    //         $set:{
    //           location:{
    //             // use aggregation pipeline to populate 'location' 
    //             // with null if either lat or long are empty
    //             $cond:{
    //               if: { $or: [
    //                 {$eq: ["$longitude",""]},
    //                 {$eq: ["$latitude",""]}
    //               ]},
    //               then: null,
    //               else: {
    //                 type: `Point`,
    //                 // note longitude is first.
    //                 coordinates: ["$longitude", "$latitude"]
    //               }
    //             }
    //           }
    //         }
    //       },
    //       {
    //         $unset: [`longitude`, `latitude`] // remove old properties
    //       }
    //     ]
    //   )


    

    // var image = db.fs.files.find({ filename: "1.jpg" }, { _id: 1 });
    // const imageID = []
    // image.forEach(doc => imageID.push(doc._id));
    // console.log(imageID[0]);



    const cursor = db.electric.find({ Make: "TESLA" }, { _id: 1 }).limit(14);
    print()

    const idsArray = []
    cursor.forEach(doc => idsArray.push(doc._id));

    print('15 IDs with TESLA as their Make')
    console.log(idsArray);

    // print();
    // print();
    // print(idsArray[0]);
    
    print('Updating each with a different image')

    db.fs.files.updateOne(
        { filename: "1.jpg" },
        { $set: { electricid: idsArray[0], geoelectricid: idsArray[0] } }
      );
      
    db.fs.files.updateOne(
        { filename: "2.jpg" },
        { $set: { electricid: idsArray[1], geoelectricid: idsArray[1] } }
    );

    db.fs.files.updateOne(
        { filename: "3.jpg" },
        { $set: { electricid: idsArray[2], geoelectricid: idsArray[2] } }
      );

    db.fs.files.updateOne(
        { filename: "4.jpg" },
        { $set: { electricid: idsArray[3], geoelectricid: idsArray[3] } }
      );

    db.fs.files.updateOne(
        { filename: "5.jpg" },
        { $set: { electricid: idsArray[4], geoelectricid: idsArray[4] } }
      );

    db.fs.files.updateOne(
        { filename: "6.jpg" },
        { $set: { electricid: idsArray[5], geoelectricid: idsArray[5] } }
      );

    db.fs.files.updateOne(
        { filename: "7.jpg" },
        { $set: { electricid: idsArray[6], geoelectricid: idsArray[6] } }
      );

    db.fs.files.updateOne(
        { filename: "8.jpg" },
        { $set: { electricid: idsArray[7], geoelectricid: idsArray[7] } }
      );

    db.fs.files.updateOne(
        { filename: "9.jpg" },
        { $set: { electricid: idsArray[8], geoelectricid: idsArray[8] } }
      );

    db.fs.files.updateOne(
        { filename: "10.jpg" },
        { $set: { electricid: idsArray[9], geoelectricid: idsArray[9] } }
      );

    db.fs.files.updateOne(
        { filename: "11.jpg" },
        { $set: { electricid: idsArray[10], geoelectricid: idsArray[10] } }
      );
    
    db.fs.files.updateOne(
        { filename: "12.jpg" },
        { $set: { electricid: idsArray[11], geoelectricid: idsArray[11] } }
      );

    db.fs.files.updateOne(
        { filename: "13.jpg" },
        { $set: { electricid: idsArray[12], geoelectricid: idsArray[12] } }
      );

    db.fs.files.updateOne(
        { filename: "14.jpg" },
        { $set: { electricid: idsArray[13], geoelectricid: idsArray[13] } }
      );

    db.fs.files.updateOne(
        { filename: "15.jpg" },
        { $set: { electricid: 0, geoelectricid: 0 } }
      );

    
    







