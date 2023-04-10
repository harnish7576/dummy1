const connection = new Mongo( `localhost:27017` ),
      db = connection.getDB( `Vehicles` ),
      tweetsColl = db.getCollection( `electric` ),
      geoColl = db.getCollection( `Geoelectric` );

// mongoimport --db SampleSocial --collection Tweets --file tweets10000-2.csv --headerline --type csv

geoColl.deleteMany({})

// Copy the tweets collection into GeoTweets
//  this is pretty slow but it works

print("HERE");
//tweetsColl.find().forEach(doc => {
//  geoColl.insertOne(doc);
//});
print("FOUND");

// use an aggregation pipeline to populate geoJSON object
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

geoColl.find().limit(5).forEach(doc => {
  printjson(doc);
});

