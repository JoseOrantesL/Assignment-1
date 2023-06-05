
  // store your narrative beats and functions herenarrativeBeasts =   
beats = [



  {
    triggered: false,
    test: function(manager, data){        return data.elapsedTime > 15   }, 
    unlock: function(manager, data){      data.intensity = 0.1;          },  
    report: function(manager, data){return}
  },
  
    {
    triggered: false,
    test: function(manager, data){        return data.timeElapsed > 30 }, 
    unlock: function(manager, data){      manager.setPhase("phase2");
                                          data.intensity = 0.3;},  
    report: function(manager, data){return}
  },
  
    {
    triggered: false,
    test: function(manager, data){        return data.timeElapsed > 75  }, 
    unlock: function(manager, data){      manager.setPhase("phase3")
                                          data.intensity = 0.6;},  
    report: function(manager, data){return}
  },

    {
    triggered: false,
    test: function(manager, data){        return data.timeElapsed > 130   }, 
    unlock: function(manager, data){      manager.setPhase("phase4");
                                          data.intensity = 0.8;},  
    report: function(manager, data){return}
  },

    {
    triggered: false,
    test: function(manager, data){        return data.timeElapsed > 200  }, 
    unlock: function(manager, data){      manager.setPhase("phase5");
                                          data.intensity = 1.4;},  
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
  
