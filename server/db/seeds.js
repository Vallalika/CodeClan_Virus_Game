use cards;
db.dropDatabase();

db.cards.insertMany([
  {
    
        "score":"0",
        "color": "green",
        "name": "stomach",
        "type": "organ",
        "invulnerable": false
        
  },
  {
    
    "score":"0",
    "color": "blue",
    "name": "brain",
    "type": "organ",
    "invulnerable": false
    
}
]);
