
  // store your narrative beats and functions herenarrativeBeasts =   
beats = [



  {
    triggered: false,
    test: function(manager, data){        return data.elapsedTime > 600   }, 
    unlock: function(manager, data){      data.intensity = 0.001;          },  
    report: function(manager, data){return}
  },
  
    {
    triggered: false,
    test: function(manager, data){        return data.timeElapsed > 1200  }, 
    unlock: function(manager, data){      manager.setPhase("phase2");
                                          data.intensity = 0.01;},  
    report: function(manager, data){return}
  },
  
    {
    triggered: false,
    test: function(manager, data){        return data.timeElapsed > 2400  }, 
    unlock: function(manager, data){      manager.setPhase("phase3")
                                          data.intensity = 0.1;},  
    report: function(manager, data){return}
  },

    {
    triggered: false,
    test: function(manager, data){        return data.timeElapsed > 3600   }, 
    unlock: function(manager, data){      manager.setPhase("phase4");
                                          data.intensity = 0.5;},  
    report: function(manager, data){return}
  },

    {
    triggered: false,
    test: function(manager, data){        return data.timeElapsed > 4800  }, 
    unlock: function(manager, data){      manager.setPhase("phase5");
                                          data.intensity = 1.0;},  
    report: function(manager, data){return}
  },
  
    {
    triggered: false,
    test: function(manager, data){        return document.title ==="Many Happy Returns of The Day; story" }, 
    unlock: function(manager, data){      data.startWordReplacement = true;},  
    report: function(manager, data){return}
  },
  
    {
    triggered: false,
    test: function(manager, data){        return document.title ==="Dog Pics" }, 
    unlock: function(manager, data){      data.startImageFlicker = true;},  
    report: function(manager, data){return}
  },


  ]
  