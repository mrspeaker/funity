const scene = {
  entities: [{
      name: "player",
      pos: [50, 150, 67, 94],
      comps: [
        ["KeyController"],
        ["KeyShooter", 0.15],
        ["Player"],
        ["Renderer", "transparent", "p1_jump.png"]
      ]
    },
    {
      name: "bullet",
      pos: [0, -20, 15, 15],
      comps: [
        ["FlyRight"],
        ["Life", 2],
        ["Renderer", "#ff0"]
      ]
    },
    {
      name: "ghost",
      pos: [320, 160, 69, 71],
      comps: [
        ["ClickRegener", 10],
        ["Damage"],
        ["Life", 5],
        ["LifeRenderer"],
        ["Wander", 2],
        ["MoveTowards", "player", 1],
        ["Renderer", "transparent", "p3_duck.png"]
      ]
    },
    {
      name: "spawner",
      pos: [290, 120, 32, 32],
      comps: [
        ["Damage", 5],
        ["Renderer", "#222"],
        ["Spawner", "ghost", 2, 10, 10]
      ]
    },
    {
      name: "spawnerBoss",
      pos: [150, 50, 70, 70],
      comps: [
        //["Damage", 10],
        ["Spawner", "spawner", 2.4, 30, 30],
        ["Renderer", "", "tochLit.png"],
        ["MoveSine", "x", 0.7, 4],
        ["MoveSine", "y", 0.3, 2],
        ["MoveSine", "y", 0.4, 2],
        //["ColorChange", 2.4]
      ]
    }
  ]
};

export default scene;
