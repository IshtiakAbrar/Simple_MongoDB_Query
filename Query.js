use("CraftShop")

db.createCollection("Demo")

db.Demo.drop()

db.Demo.insertOne({
    "Name":"Ishtiak",
    "Age":"25",
    "Gender":"Male"
})

db.Demo.deleteOne({"Name":"Ishtiak"})