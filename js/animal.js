const animals = [
    {
      name: "Giant panda",
      species: "(Ailuropoda melanoleuca)",
    },
    {
      name: "Tiger",
      species: "(Panthera tigris) ",
    },
    {
      name:
        "Whooping crane",
      speices: "(Grus americana)",
    },
    {
      name: "Blue whale",
      species: "(Balaenoptera musculus)",
    },
    {
      name: "Asian elephant",
      species: "(Elephas maximus)",
    },
    {
      name: "Sea otter",
      species: "(Enhydra lutris)",
    },
    {
      name: "Snow leopard",
      species: "(Panthera uncia)",
    },
    {
      name: "Gorilla",
      species: "(Gorilla beringei andGorilla gorilla)",
    },
    {
      name: "Tasmanian devil",
      species: "(Sarcophilus harrisii)",
    },
    {
      name: "Orangutan",
      species: "(Pongo pygmaeus)",
    },
  ];

  const names = document.querySelector("#name span:first-child");
  const species = document.querySelector("#name span:last-child");
  const Animal = animals[Math.floor(Math.random()*animals.length)];

  names.innerText = Animal.name;
  species.innerText = Animal.species;