var logo = 
`
                                        
         #@@@@@@@@@@@@@@@*              ${user}@${device}
  /@@@&@@@@@@@@@@@@@#  *@*              ------------
     /@@@@@@@@@@@.  @@@@@@@             OS: AthenaEnv v2
    @@ #@@@@@@& ,@@,  @@@@@@            Kernel: PS2DEV Kernel
    /@@,*@@@@ .@@@/  (@@@@@@@           Uptime: null
   .     @@@*       *@@@@@@@@           Packages: 4 (dpkg)
   @@@@@@   #@@@@@@@@@@@@@@@@           Shell: owlsh 0.1
    @@@@@( *@@@@@@@@@@@@@@@@@@          Terminal: TermOwl
    .@@@@@@@@@@@@@@@ @@@@@@@@@@@.       CPU: MIPS R5900 Emotion Engine
    @@@(@@@@@@@@&   @@@@@@@@@@@@@@      GPU: Graphics Synthesizer
   .@@@   @@@@     *@@@@@@@@@@@@@@@.    Memory: ${32 - Math.floor(System.getFreeMemory() / 1048576)}MiB / 32MiB
   .@@@            /@@@@@@@@@@@@@@@@.   
    @@@,            @@@@@@@@@@@@@@@@@   
     @@@            /@@@@@@@@@@@@@@@@@  
      @@@.           /@@@@@@@@@@@@@@@@. 
        @@@            @@@@@@@@@@@@@@@@ 
          &@@,           @@@@@@@@@@@@@@ 
             %@@&          (@@@@@@@@@@@ 
                 *@@@@@*.      @@@@@@@@ 
                   *@@@.    #@@@    %@# 
                  ,@@@     /@@&         
        #@@@,@@@(@@@( @@%&@@@@@@@@*     
             /   %    #  .(                                                                      
`

//Console.setFontColor(0xFFFF0080);
Console.print(logo);
