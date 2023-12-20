
   const activePage = window.location.pathname;

   const navLinks = document.querySelectorAll('nav a').forEach(link => {
      if (link.href.includes(`${activePage}`) && activePage !== "/") {
         link.classList.add('active');
        //  console.log(link);
         console.log(activePage);
      }
      
   })

   let entertainment_link = document.getElementById("entertainment-link");
   let corporate_link = document.getElementById("corporate-link");
   let education_link = document.getElementById("education-link");
   let hospitality_link = document.getElementById("hospitality-link");
   let leisure_link = document.getElementById("leisure-link");
   let publicator_link = document.getElementById("publicator-link");
   let retail_link = document.getElementById("retail-link");

   let entertainment_subsector = document.getElementById("entertainment-subsector");
   let corporate_subsector = document.getElementById("corporate-subsector");
   let education_subsector = document.getElementById("education-subsector");
   let hospitality_subsector = document.getElementById("hospitality-subsector");
   let leisure_subsector = document.getElementById("leisure-subsector");
   let publicator_subsector = document.getElementById("publicator-subsector");
   let retail_subsector = document.getElementById("retail-subsector");

   entertainment_link.addEventListener("click",(e)=>{
      entertainment_subsector.style.display="flex";
      corporate_subsector.style.display="none"
      education_subsector.style.display="none";
      hospitality_subsector.style.display="none";
      leisure_subsector.style.display="none";
      publicator_subsector.style.display="none";
      retail_subsector.style.display="none";

      entertainment_link.classList.add("key-sector-active-list");
      corporate_link.classList.remove("key-sector-active-list");
      education_link.classList.remove("key-sector-active-list");
      hospitality_link.classList.remove("key-sector-active-list");
      leisure_link.classList.remove("key-sector-active-list");
      publicator_link.classList.remove("key-sector-active-list");
      retail_link.classList.remove("key-sector-active-list");
    })

    corporate_link.addEventListener("click",(e)=>{
      entertainment_subsector.style.display="none";
      corporate_subsector.style.display="flex"
      education_subsector.style.display="none";
      hospitality_subsector.style.display="none";
      leisure_subsector.style.display="none";
      publicator_subsector.style.display="none";
      retail_subsector.style.display="none";

      entertainment_link.classList.remove("key-sector-active-list");
      corporate_link.classList.add("key-sector-active-list");
      education_link.classList.remove("key-sector-active-list");
      hospitality_link.classList.remove("key-sector-active-list");
      leisure_link.classList.remove("key-sector-active-list");
      publicator_link.classList.remove("key-sector-active-list");
      retail_link.classList.remove("key-sector-active-list");
    })

    education_link.addEventListener("click",(e)=>{
      entertainment_subsector.style.display="none";
      corporate_subsector.style.display="none"
      education_subsector.style.display="flex";
      hospitality_subsector.style.display="none";
      leisure_subsector.style.display="none";
      publicator_subsector.style.display="none";
      retail_subsector.style.display="none";

      entertainment_link.classList.remove("key-sector-active-list");
      corporate_link.classList.remove("key-sector-active-list");
      education_link.classList.add("key-sector-active-list");
      hospitality_link.classList.remove("key-sector-active-list");
      leisure_link.classList.remove("key-sector-active-list");
      publicator_link.classList.remove("key-sector-active-list");
      retail_link.classList.remove("key-sector-active-list");
    })

    hospitality_link.addEventListener("click",(e)=>{
      entertainment_subsector.style.display="none";
      corporate_subsector.style.display="none"
      education_subsector.style.display="none";
      hospitality_subsector.style.display="flex";
      leisure_subsector.style.display="none";
      publicator_subsector.style.display="none";
      retail_subsector.style.display="none";

      entertainment_link.classList.remove("key-sector-active-list");
      corporate_link.classList.remove("key-sector-active-list");
      education_link.classList.remove("key-sector-active-list");
      hospitality_link.classList.add("key-sector-active-list");
      leisure_link.classList.remove("key-sector-active-list");
      publicator_link.classList.remove("key-sector-active-list");
      retail_link.classList.remove("key-sector-active-list");
    })

    leisure_link.addEventListener("click",(e)=>{
      entertainment_subsector.style.display="none";
      corporate_subsector.style.display="none"
      education_subsector.style.display="none";
      hospitality_subsector.style.display="none";
      leisure_subsector.style.display="flex";
      publicator_subsector.style.display="none";
      retail_subsector.style.display="none";

      entertainment_link.classList.remove("key-sector-active-list");
      corporate_link.classList.remove("key-sector-active-list");
      education_link.classList.remove("key-sector-active-list");
      hospitality_link.classList.remove("key-sector-active-list");
      leisure_link.classList.add("key-sector-active-list");
      publicator_link.classList.remove("key-sector-active-list");
      retail_link.classList.remove("key-sector-active-list");
    })

    publicator_link.addEventListener("click",(e)=>{
      entertainment_subsector.style.display="none";
      corporate_subsector.style.display="none"
      education_subsector.style.display="none";
      hospitality_subsector.style.display="none";
      leisure_subsector.style.display="none";
      publicator_subsector.style.display="flex";
      retail_subsector.style.display="none";

      entertainment_link.classList.remove("key-sector-active-list");
      corporate_link.classList.remove("key-sector-active-list");
      education_link.classList.remove("key-sector-active-list");
      hospitality_link.classList.remove("key-sector-active-list");
      leisure_link.classList.remove("key-sector-active-list");
      publicator_link.classList.add("key-sector-active-list");
      retail_link.classList.remove("key-sector-active-list");
    })

    retail_link.addEventListener("click",(e)=>{
      entertainment_subsector.style.display="none";
      corporate_subsector.style.display="none"
      education_subsector.style.display="none";
      hospitality_subsector.style.display="none";
      leisure_subsector.style.display="none";
      publicator_subsector.style.display="none";
      retail_subsector.style.display="flex";

      entertainment_link.classList.remove("key-sector-active-list");
      corporate_link.classList.remove("key-sector-active-list");
      education_link.classList.remove("key-sector-active-list");
      hospitality_link.classList.remove("key-sector-active-list");
      leisure_link.classList.remove("key-sector-active-list");
      publicator_link.classList.remove("key-sector-active-list");
      retail_link.classList.add("key-sector-active-list");
    })



    // =========================crausol=======================
    let diablo = document.getElementById("diablo");
    let miso_sexy = document.getElementById("miso-sexy")
   
    let imperfecto = document.getElementById("imperfecto")
    let aviary = document.getElementById("aviary")
    let bougie = document.getElementById("bougie")
    let bent_chair = document.getElementById("bent-chair")
    let bar_headquators = document.getElementById("bar-headquators")
    let molecule_bhopal = document.getElementById("molecule-bhopal")
    let romeo_lane = document.getElementById("romeo-lane")
    let knot = document.getElementById("knot")
    let roadies = document.getElementById("roadies")
    let lod_goa = document.getElementById("lod-goa")
    let lod_agra = document.getElementById("lod-agra")
    let bb_club = document.getElementById("bb_club")
    let Mystic= document.getElementById("Mystic")
    // new
    let dart_canday= document.getElementById("dart_canday")
    let my_fair= document.getElementById("my_fair")
    let mic_drop= document.getElementById("mic_drop")
    // end

    // let universal_club= document.getElementById("universal-club")
    // let lod_bhopal= document.getElementById("lod-bhopal")


    let diablo_details = document.getElementById("diablo-details");
    let miso_sexy_details = document.getElementById("miso-sexy-details")
    let noche_details = document.getElementById("noche-details")
    let imperfecto_details = document.getElementById("imperfecto-details")
    let aviary_details = document.getElementById("aviary-details")
    let bougie_details = document.getElementById("bougie-details")
    let bent_chair_details = document.getElementById("bent-chair-details")
    let bar_headquators_details = document.getElementById("bar-headquators-details")
    let molecule_bhopal_details = document.getElementById("molecule-bhopal-details")
    let romeo_lane_details = document.getElementById("romeo-lane-details")
    let knot_details = document.getElementById("knot-details")
    let roadies_details = document.getElementById("roadies-details")
    let lod_goa_details = document.getElementById("lod-goa-details")
    let lod_agra_details = document.getElementById("lod-agra-details")
    let bb_club_details = document.getElementById("bb_club-details")
    let palmsdetails = document.getElementById("palmsdetails")
    // new
        let dart_canday_details = document.getElementById("dart_canday_details")
    let my_fair_details = document.getElementById("my_fair_details")
    let mic_drop_details = document.getElementById("mic_drop_details")

    // end
    // let universalClubDetails = document.getElementById("universalClubDetails")
    // let lodbhopal = document.getElementById("lodbhopal")
    




    // lod_bhopal.addEventListener("click",(e)=>{
    //   diablo_details.style.display="none";
    //   miso_sexy_details.style.display="none";
     
    //   imperfecto_details.style.display="none";
    //   aviary_details.style.display="none";
    //   bougie_details.style.display="none";
    //   bent_chair_details.style.display="none";
    //   bar_headquators_details.style.display="none";
    //   molecule_bhopal_details.style.display="none";
    //   romeo_lane_details.style.display="none";
    //   knot_details.style.display="none";
    //   roadies_details.style.display="none";
    //   lod_goa_details.style.display="none";
    //   lod_agra_details.style.display="none";
    //   bb_club_details.style.display="none";
    //   palmsdetails.style.display="none";
    //   universalClubDetails.style.display="none";
    //   lodbhopal.style.display="flex";
    // })

    diablo.addEventListener("click",(e)=>{
      diablo_details.style.display="flex";
      miso_sexy_details.style.display="none";
     
      imperfecto_details.style.display="none";
      aviary_details.style.display="none";
      bougie_details.style.display="none";
      bent_chair_details.style.display="none";
      bar_headquators_details.style.display="none";
      molecule_bhopal_details.style.display="none";
      romeo_lane_details.style.display="none";
      knot_details.style.display="none";
      roadies_details.style.display="none";
      lod_goa_details.style.display="none";
      lod_agra_details.style.display="none";
      bb_club_details.style.display="none";
      palmsdetails.style.display="none";
      universalClubDetails.style.display="none";
      lodbhopal.style.display="none";
      mic_drop_details.style.display="none";
      my_fair_details.style.display="none";
      dart_canday_details.style.display="none";
    })

    miso_sexy.addEventListener("click",(e)=>{
      diablo_details.style.display="none";
      miso_sexy_details.style.display="flex";
    
      imperfecto_details.style.display="none";
      aviary_details.style.display="none";
      bougie_details.style.display="none";
      bent_chair_details.style.display="none";
      bar_headquators_details.style.display="none";
      molecule_bhopal_details.style.display="none";
      romeo_lane_details.style.display="none";
      knot_details.style.display="none";
      roadies_details.style.display="none";
      lod_goa_details.style.display="none";
      lod_agra_details.style.display="none";
      bb_club_details.style.display="none";
      palmsdetails.style.display="none";
      universalClubDetails.style.display="none";
      lodbhopal.style.display="none";
      mic_drop_details.style.display="none";
      my_fair_details.style.display="none";
      dart_canday_details.style.display="none";
    })

 

    imperfecto.addEventListener("click",(e)=>{
      diablo_details.style.display="none";
      miso_sexy_details.style.display="none";
    
      imperfecto_details.style.display="flex";
      aviary_details.style.display="none";
      bougie_details.style.display="none";
      bent_chair_details.style.display="none";
      bar_headquators_details.style.display="none";
      molecule_bhopal_details.style.display="none";
      romeo_lane_details.style.display="none";
      knot_details.style.display="none";
      roadies_details.style.display="none";
      lod_goa_details.style.display="none";
      lod_agra_details.style.display="none";
      bb_club_details.style.display="none";
      palmsdetails.style.display="none";
      universalClubDetails.style.display="none";
      lodbhopal.style.display="none";
      mic_drop_details.style.display="none";
      my_fair_details.style.display="none";
      dart_canday_details.style.display="none";
    })

    aviary.addEventListener("click",(e)=>{
      diablo_details.style.display="none";
      miso_sexy_details.style.display="none";
    
      imperfecto_details.style.display="none";
      aviary_details.style.display="flex";
      bougie_details.style.display="none";
      bent_chair_details.style.display="none";
      bar_headquators_details.style.display="none";
      molecule_bhopal_details.style.display="none";
      romeo_lane_details.style.display="none";
      knot_details.style.display="none";
      roadies_details.style.display="none";
      lod_goa_details.style.display="none";
      lod_agra_details.style.display="none";
      bb_club_details.style.display="none";
      palmsdetails.style.display="none";
      universalClubDetails.style.display="none";
      lodbhopal.style.display="none";
      mic_drop_details.style.display="none";
      my_fair_details.style.display="none";
      dart_canday_details.style.display="none";
    })

    bougie.addEventListener("click",(e)=>{
      diablo_details.style.display="none";
      miso_sexy_details.style.display="none";
     
      imperfecto_details.style.display="none";
      aviary_details.style.display="none";
      bougie_details.style.display="flex";
      bent_chair_details.style.display="none";
      bar_headquators_details.style.display="none";
      molecule_bhopal_details.style.display="none";
      romeo_lane_details.style.display="none";
      knot_details.style.display="none";
      roadies_details.style.display="none";
      lod_goa_details.style.display="none";
      lod_agra_details.style.display="none";
      bb_club_details.style.display="none";
      palmsdetails.style.display="none";
      universalClubDetails.style.display="none";
      lodbhopal.style.display="none";
      mic_drop_details.style.display="none";
      my_fair_details.style.display="none";
      dart_canday_details.style.display="none";
    })

    bent_chair.addEventListener("click",(e)=>{
      diablo_details.style.display="none";
      miso_sexy_details.style.display="none";
    
      imperfecto_details.style.display="none";
      aviary_details.style.display="none";
      bougie_details.style.display="none";
      bent_chair_details.style.display="flex";
      bar_headquators_details.style.display="none";
      molecule_bhopal_details.style.display="none";
      romeo_lane_details.style.display="none";
      knot_details.style.display="none";
      roadies_details.style.display="none";
      lod_goa_details.style.display="none";
      lod_agra_details.style.display="none";
      bb_club_details.style.display="none";
      palmsdetails.style.display="none";
      universalClubDetails.style.display="none";
      lodbhopal.style.display="none";
      mic_drop_details.style.display="none";
      my_fair_details.style.display="none";
      dart_canday_details.style.display="none";
    })

    bar_headquators.addEventListener("click",(e)=>{
      diablo_details.style.display="none";
      miso_sexy_details.style.display="none";
    
      imperfecto_details.style.display="none";
      aviary_details.style.display="none";
      bougie_details.style.display="none";
      bent_chair_details.style.display="none";
      bar_headquators_details.style.display="flex";
      molecule_bhopal_details.style.display="none";
      romeo_lane_details.style.display="none";
      knot_details.style.display="none";
      roadies_details.style.display="none";
      lod_goa_details.style.display="none";
      lod_agra_details.style.display="none";
      bb_club_details.style.display="none";
      palmsdetails.style.display="none";
      universalClubDetails.style.display="none";
      lodbhopal.style.display="none";
      mic_drop_details.style.display="none";
      my_fair_details.style.display="none";
      dart_canday_details.style.display="none";
    })

    molecule_bhopal.addEventListener("click",(e)=>{
      diablo_details.style.display="none";
      miso_sexy_details.style.display="none";
    
      imperfecto_details.style.display="none";
      aviary_details.style.display="none";
      bougie_details.style.display="none";
      bent_chair_details.style.display="none";
      bar_headquators_details.style.display="none";
      molecule_bhopal_details.style.display="flex";
      romeo_lane_details.style.display="none";
      knot_details.style.display="none";
      roadies_details.style.display="none";
      lod_goa_details.style.display="none";
      lod_agra_details.style.display="none";
      bb_club_details.style.display="none";
      palmsdetails.style.display="none";
      universalClubDetails.style.display="none";
      lodbhopal.style.display="none";
      mic_drop_details.style.display="none";
      my_fair_details.style.display="none";
      dart_canday_details.style.display="none";
    })

    romeo_lane.addEventListener("click",(e)=>{
      diablo_details.style.display="none";
      miso_sexy_details.style.display="none";
   
      imperfecto_details.style.display="none";
      aviary_details.style.display="none";
      bougie_details.style.display="none";
      bent_chair_details.style.display="none";
      bar_headquators_details.style.display="none";
      molecule_bhopal_details.style.display="none";
      romeo_lane_details.style.display="flex";
      knot_details.style.display="none";
      roadies_details.style.display="none";
      lod_goa_details.style.display="none";
      lod_agra_details.style.display="none";
      bb_club_details.style.display="none";
      palmsdetails.style.display="none";
      universalClubDetails.style.display="none";
      lodbhopal.style.display="none";
      mic_drop_details.style.display="none";
      my_fair_details.style.display="none";
      dart_canday_details.style.display="none";
    })

    knot.addEventListener("click",(e)=>{
      diablo_details.style.display="none";
      miso_sexy_details.style.display="none";
     
      imperfecto_details.style.display="none";
      aviary_details.style.display="none";
      bougie_details.style.display="none";
      bent_chair_details.style.display="none";
      bar_headquators_details.style.display="none";
      molecule_bhopal_details.style.display="none";
      romeo_lane_details.style.display="none";
      knot_details.style.display="flex";
      roadies_details.style.display="none";
      lod_goa_details.style.display="none";
      lod_agra_details.style.display="none";
      bb_club_details.style.display="none";
      palmsdetails.style.display="none";
      universalClubDetails.style.display="none";
      lodbhopal.style.display="none";
      mic_drop_details.style.display="none";
      my_fair_details.style.display="none";
      dart_canday_details.style.display="none";
    
    })

    roadies.addEventListener("click",(e)=>{
      diablo_details.style.display="none";
      miso_sexy_details.style.display="none";
   
      imperfecto_details.style.display="none";
      aviary_details.style.display="none";
      bougie_details.style.display="none";
      bent_chair_details.style.display="none";
      bar_headquators_details.style.display="none";
      molecule_bhopal_details.style.display="none";
      romeo_lane_details.style.display="none";
      knot_details.style.display="none";
      roadies_details.style.display="flex";
      lod_goa_details.style.display="none";
      lod_agra_details.style.display="none";
      bb_club_details.style.display="none";
      palmsdetails.style.display="none";
      lodbhopal.style.display="none";
      universalClubDetails.style.display="none";
      mic_drop_details.style.display="none";
      my_fair_details.style.display="none";
      dart_canday_details.style.display="none";
    })



    lod_goa.addEventListener("click",(e)=>{
      diablo_details.style.display="none";
      miso_sexy_details.style.display="none";
   
      imperfecto_details.style.display="none";
      aviary_details.style.display="none";
      bougie_details.style.display="none";
      bent_chair_details.style.display="none";
      bar_headquators_details.style.display="none";
      molecule_bhopal_details.style.display="none";
      romeo_lane_details.style.display="none";
      knot_details.style.display="none";
      roadies_details.style.display="none";
      lod_goa_details.style.display="flex";
      lod_agra_details.style.display="none";
      bb_club_details.style.display="none";
      palmsdetails.style.display="none";
      universalClubDetails.style.display="none";
      lodbhopal.style.display="none";
      mic_drop_details.style.display="none";
      my_fair_details.style.display="none";
      dart_canday_details.style.display="none";
    })

    lod_agra.addEventListener("click",(e)=>{
      diablo_details.style.display="none";
      miso_sexy_details.style.display="none";
    
      imperfecto_details.style.display="none";
      aviary_details.style.display="none";
      bougie_details.style.display="none";
      bent_chair_details.style.display="none";
      bar_headquators_details.style.display="none";
      molecule_bhopal_details.style.display="none";
      romeo_lane_details.style.display="none";
      knot_details.style.display="none";
      roadies_details.style.display="none";
      lod_goa_details.style.display="none";
      lod_agra_details.style.display="flex";
      bb_club_details.style.display="none";
      palmsdetails.style.display="none";
      universalClubDetails.style.display="none";
      lodbhopal.style.display="none";
      mic_drop_details.style.display="none";
      my_fair_details.style.display="none";
      dart_canday_details.style.display="none";
    })

    bb_club.addEventListener("click",(e)=>{
      diablo_details.style.display="none";
      miso_sexy_details.style.display="none";
    
      imperfecto_details.style.display="none";
      aviary_details.style.display="none";
      bougie_details.style.display="none";
      bent_chair_details.style.display="none";
      bar_headquators_details.style.display="none";
      molecule_bhopal_details.style.display="none";
      romeo_lane_details.style.display="none";
      knot_details.style.display="none";
      roadies_details.style.display="none";
      lod_goa_details.style.display="none";
      lod_agra_details.style.display="none";
      bb_club_details.style.display="flex";
      palmsdetails.style.display="none";
      universalClubDetails.style.display="none";
      lodbhopal.style.display="none";
      mic_drop_details.style.display="none";
      my_fair_details.style.display="none";
      dart_canday_details.style.display="none";
    })

    Mystic.addEventListener("click",(e)=>{
      diablo_details.style.display="none";
      miso_sexy_details.style.display="none";
   
      imperfecto_details.style.display="none";
      aviary_details.style.display="none";
      bougie_details.style.display="none";
      bent_chair_details.style.display="none";
      bar_headquators_details.style.display="none";
      molecule_bhopal_details.style.display="none";
      romeo_lane_details.style.display="none";
      knot_details.style.display="none";
      roadies_details.style.display="none";
      lod_goa_details.style.display="none";
      lod_agra_details.style.display="none";
      bb_club_details.style.display="none";
      palmsdetails.style.display="flex";
      universalClubDetails.style.display="none";
      lodbhopal.style.display="none";
      mic_drop_details.style.display="none";
      my_fair_details.style.display="none";
      dart_canday_details.style.display="none";

    })
    // new
    dart_canday.addEventListener("click",(e)=>{
      diablo_details.style.display="none";
      miso_sexy_details.style.display="none";
   
      imperfecto_details.style.display="none";
      aviary_details.style.display="none";
      bougie_details.style.display="none";
      bent_chair_details.style.display="none";
      bar_headquators_details.style.display="none";
      molecule_bhopal_details.style.display="none";
      romeo_lane_details.style.display="none";
      knot_details.style.display="none";
      roadies_details.style.display="none";
      lod_goa_details.style.display="none";
      lod_agra_details.style.display="none";
      bb_club_details.style.display="none";
      palmsdetails.style.display="none";
      universalClubDetails.style.display="none";
      lodbhopal.style.display="none";
      dart_canday_details.style.display="flex";

      mic_drop_details.style.display="none";
      my_fair_details.style.display="none";
    })
    my_fair.addEventListener("click",(e)=>{
      diablo_details.style.display="none";
      miso_sexy_details.style.display="none";
   
      imperfecto_details.style.display="none";
      aviary_details.style.display="none";
      bougie_details.style.display="none";
      bent_chair_details.style.display="none";
      bar_headquators_details.style.display="none";
      molecule_bhopal_details.style.display="none";
      romeo_lane_details.style.display="none";
      knot_details.style.display="none";
      roadies_details.style.display="none";
      lod_goa_details.style.display="none";
      lod_agra_details.style.display="none";
      bb_club_details.style.display="none";
      palmsdetails.style.display="none";
      universalClubDetails.style.display="none";
      lodbhopal.style.display="none";
      mic_drop_details.style.display="none";
      my_fair_details.style.display="flex";
      dart_canday_details.style.display="none";

    })
    mic_drop.addEventListener("click",(e)=>{
      diablo_details.style.display="none";
      miso_sexy_details.style.display="none";
   
      imperfecto_details.style.display="none";
      aviary_details.style.display="none";
      bougie_details.style.display="none";
      bent_chair_details.style.display="none";
      bar_headquators_details.style.display="none";
      molecule_bhopal_details.style.display="none";
      romeo_lane_details.style.display="none";
      knot_details.style.display="none";
      roadies_details.style.display="none";
      lod_goa_details.style.display="none";
      lod_agra_details.style.display="none";
      bb_club_details.style.display="none";
      palmsdetails.style.display="none";
      universalClubDetails.style.display="none";
      lodbhopal.style.display="none";
      mic_drop_details.style.display="flex";
      my_fair_details.style.display="none";
      dart_canday_details.style.display="none";
        })
    // end

    // universal_club.addEventListener("click",(e)=>{
    //   diablo_details.style.display="none";
    //   miso_sexy_details.style.display="none";
   
    //   imperfecto_details.style.display="none";
    //   aviary_details.style.display="none";
    //   bougie_details.style.display="none";
    //   bent_chair_details.style.display="none";
    //   bar_headquators_details.style.display="none";
    //   molecule_bhopal_details.style.display="none";
    //   romeo_lane_details.style.display="none";
    //   knot_details.style.display="none";
    //   roadies_details.style.display="none";
    //   lod_goa_details.style.display="none";
    //   lod_agra_details.style.display="none";
    //   bb_club_details.style.display="none";
    //   palmsdetails.style.display="none";
    //   universalClubDetails.style.display="flex";
    //   lodbhopal.style.display="none";

    // })