AFRAME.registerComponent("cursor-listener", {
  schema: {
    selectedItemId: { default: "", type: "string" },
  },
  init: function () {
    this.handleMouseEnterEvents();
    this.handleMouseLeaveEvents();
    this.handleClickEvents();
  },

  handleClickEvents: function() {
    //  Click Events
    this.el.addEventListener("click", evt => {
      const id = this.el.getAttribute("id");
      console.log(id)
      const placesContainer = document.querySelector("#places-container");

      comics = ["super-man","spider-man","captain-aero","outer-space"]
      if (comics.includes(id)){
        this.createBanner(id)
        this.fade_background()
      }
    });
  },

  handlePlacesListState: function () {
    const id = this.el.getAttribute("id");
    console.log()
    const placesId = ["super-man", "spider-man", "outer-space","captain-aero"];
    if (placesId.includes(id)) {
      const placeContainer = document.querySelector("#places-container");
      placeContainer.setAttribute("cursor-listener", {
        selectedItemId: id,
      });
      this.el.setAttribute("material", {
        color: "#D76B30",
        opacity: 1,
      });
    }
  },
  handleMouseEnterEvents: function () {
    // Mouse Enter Events
    this.el.addEventListener("mouseenter", () => {
      this.handlePlacesListState();
    });
  },
  handleMouseLeaveEvents: function () {
    // Mouse Leave Events
    this.el.addEventListener("mouseleave", () => {
      const {selectedItemId} = this.data;
      if (selectedItemId){
        const element = document.querySelector(`#${selectedItemId}`)
        const id = element.getAttribute("id")
        if (id == selectedItemId){
          element.setAttribute("material",{
            color:"#0077CC",opacity:1})
        }
      }

    })
    
  },
  createBanner:function(comic){
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive:"plane",
      width:1,
      height:1, 
    });
    entityEl.setAttribute("material", {color:"black"});
    entityEl.setAttribute("position", {x:0,y:0,z:-1})

    
    if (comic === "captain-aero"){
      entityEl.setAttribute("src",)
      entityEl.setAttribute("text",{font:"monoid",value:"Captain Aero is a US Army flying ace who fights evil German pilots, death-ray-wielding mad scientists, and Yellow Perils. He has a unique plane that can use its propeller like a buzzsaw to saw through things like building roofs and the wings of other planes, allowing him to get at those hiding inside.",color:"white",width: "1",height:"0.5",align:"center"})
    }
    if (comic === "super-man"){
      entityEl.setAttribute("src",)
      entityEl.setAttribute("text",{font:"monoid",value:"Superman is a fictional superhero created by Jerry Siegel and Joe Shuster for DC Comics. He first appeared in Action Comics #1 in April 1938. Superman was born Kal-El on the planet Krypton, and his parents sent him to Earth when they realized their planet was dying. The Kent family found him in the American Midwest and named him Clark Kent.",color:"white",width: "1",height:"0.5",align:"center"})
    }
    if (comic === "spider-man"){
      entityEl.setAttribute("src",)
      entityEl.setAttribute("text",{font:"monoid",value:"Spider-Man is a Marvel Comics superhero created by Stan Lee and Steve Ditko. He first appeared in Amazing Fantasy #15 in August 1962. Spider-Man's secret identity is Peter Benjamin Parker, a poor, sickly orphan raised by his Aunt May and Uncle Ben in Queens, New York City. After being bitten by a radioactive spider, Peter develops superhuman strength, agility, reflexes, stamina, and durability. He also has the ability to cling to solid surfaces, a precognitive spider-sense, and a genius-level intellect.",color:"white",width: "1",height:"0.5",align:"center"})
    }
    if (comic === "outer-space"){
      entityEl.setAttribute("src",)
      entityEl.setAttribute("text",{font:"monoid",value:"Outer Space is a comic book series from 1958 by Charlton that features space explorers from Andromeda who land on Earth in 1968. The series includes the following issues: The Incredible Voyagers, The Girl Out There, Stone Switcher, Target: Earth, and The Man Who Stole the Moon.",color:"white",width: "1",height:"0.5",align:"center"})
    }

    camera = document.getElementById("camera")
    camera.appendChild(entityEl)

  },
  fade_background:function(){
    fade_component = document.getElementById("fade-back")
    fade_component.setAttribute("visible",true)
    fade_component.setAttribute("position",{x:0,y:0,z:0})
  }


});
