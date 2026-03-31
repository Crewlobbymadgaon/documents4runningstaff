const directoryData = [
  {
    "name": "Lobby Mangalore Central",
    "designation": "Lobby MAQ",
    "phone": 9746740260
  },
  {
    "name": "Lobby Mangalore Junction",
    "designation": "Lobby MAJN",
    "phone": 6238902022
  },
  {
    "name": "Power Controller PGT",
    "designation": "PRC PGT",
    "phone": 9746763323
  },
  {
    "name": "V D Rane",
    "designation": "LPG/RN",
    "phone": 9004474871
  },
  {
    "name": "Santosh Kumar Jha",
    "designation": "Chairman & Managing Director (CMD)",
    "phone": 9004447000, isHOD: true
  },
  {
    "name": "R M Bhadang",
    "designation": "Director Finance (DIR-F)",
    "phone": 9004447009, isHOD: true
  },
  {
    "name": "Sunil Gupta",
    "designation": "Director(Operations & Commercial) (DIR-O&C)",
    "phone": 9004447001, isHOD: true
  },
  {
    "name": "R K Hegde",
    "designation": "Director(Way & Works) (DIR-W&W)",
    "phone": 9004447002, isHOD: true
  },
  {
    "name": "Sushant Kumar Bala",
    "designation": "DGM( Operation & Safety ) to CMD",
    "phone": 9004470384, isHOD: true
  },
  {
    "name": "Sheetal Sharma",
    "designation": "Sr ADGM(Co-ordination to CMD)",
    "phone": 9004470392, isHOD: true
  },
  {
    "name": "Vaidehi R Nanivadekar",
    "designation": "Secretary to CMD",
    "phone": 9004447007
  },
  {
    "name": "Akanksha J Sonawane",
    "designation": "Secretary-II to CMD",
    "phone": 9004470367
  },
  {
    "name": "Smita Raj",
    "designation": "Personal Secretary/Dir(FIN)",
    "phone": 9004470318
  },
  {
    "name": "Anita Gracy M Chettiar",
    "designation": "Personal Secretary/DIR(W&W)",
    "phone": 9004470715
  },
  {
    "name": "Netra A Girkar",
    "designation": "Personal Secretary",
    "phone": 9004470368
  },
  {
    "name": "Vishnu K Lad",
    "designation": "General Assistant (GA)",
    "phone": 9004470779
  },
  {
    "name": "Deepak Parab",
    "designation": "General Assistant (GA)",
    "phone": 9004470706
  },
  {
    "name": "Yogesh G Thite",
    "designation": "General Assistant (GA)",
    "phone": 9004470506
  },
  {
    "name": "Lalan Mandal",
    "designation": "General Assistant (GA)",
    "phone": 9004470744
  },
  {
    "name": "Guruprasad Acharya",
    "designation": "General Assistant (GA)",
    "phone": 9004470751
  },
  {
    "name": "S R Munde",
    "designation": "General Assistant (GA)",
    "phone": 9004470756
  },
  {
    "name": "Mujeeb Khan",
    "designation": "General Assistant (GA)",
    "phone": 9004470507
  },
  {
    "name": "R C Parab",
    "designation": "Company Secretary ",
    "phone": 9004447004, isHOD: true
  },
  {
    "name": "Sindhu Sarath",
    "designation": "Sr.Law Officer",
    "phone": 9004197075
  },
  {
    "name": "Vidhya Dhavlikar",
    "designation": "Sr.Law Officer",
    "phone": 9004470309
  },
  {
    "name": "Pramod Kumar Sabot",
    "designation": "Asst.Co.Sec.",
    "phone": 9004470608
  },
  {
    "name": "Jyoti Rajesh",
    "designation": "Asst. Law Off.",
    "phone": 9004470563
  },
  {
    "name": "Lobby Suratkal",
    "designation": "Lobby SL",
    "phone": 7624978576
  },
  {
    "name": "Power Controller KRCL",
    "designation": "PRC/BEL",
    "phone": 9004447599
  },
  {
    "name": "Vanita S D",
    "designation": "Office Superintendent (OS/Bonds)",
    "phone": 9321965823
  },
  {
    "name": "D D Karande",
    "designation": "OA/T",
    "phone": 8591941852
  },
  {
    "name": "Kamlesh Yadav",
    "designation": "General Assistant (GA)",
    "phone": 9004470705
  },
  {
    "name": "Chitrasen P",
    "designation": "DGM (ADMIN)",
    "phone": 9004447005, isHOD: true
  },
  {
    "name": "Sunil M Kamble",
    "designation": "JE/DD/II",
    "phone": 9004470738
  },
  {
    "name": "Nitin Nalavde",
    "designation": "OS/G",
    "phone": 9004470739
  },
  {
    "name": "Anurag Bhushan",
    "designation": "OS/Transport",
    "phone": 9004470748
  },
  {
    "name": "Girish R Karandikar",
    "designation": "CPRO",
    "phone": 9004470387, isHOD: true
  },
  {
    "name": "Melita Barretto",
    "designation": "PRI/II",
    "phone": 7400408725
  },
  {
    "name": "Nilesh Naik",
    "designation": "OS",
    "phone": 9004470502
  },
  {
    "name": "D Y Nanal",
    "designation": "OA/T",
    "phone": 7400408726
  },
  {
    "name": "Ranjit Singh Manhas",
    "designation": "PVC",
    "phone": 9004470736, isHOD: true
  },
  {
    "name": "Vaishali Patange",
    "designation": "DGM(TRAINING)",
    "phone": 9004470461, isHOD: true
  },
  {
    "name": "Deepak K Kudalkar",
    "designation": "Asst.Proto. Officer",
    "phone": 9004470595
  },
  {
    "name": "Mangesh P Bhagat",
    "designation": "V Driver",
    "phone": 9004470741
  },
  {
    "name": "U T Madhvi",
    "designation": "V Driver",
    "phone": 9004470743
  },
  {
    "name": "Sunil B Wadkar",
    "designation": "V Driver",
    "phone": 9004470746
  },
  {
    "name": "S R Kalamkar",
    "designation": "V Driver",
    "phone": 9004470749
  },
  {
    "name": "R K Maity",
    "designation": "V Driver",
    "phone": 9004470750
  },
  {
    "name": "H K Mahadik",
    "designation": "V Driver",
    "phone": 9004470752
  },
  {
    "name": "Rajaram Shinde",
    "designation": "V Driver",
    "phone": 9004470755
  },
  {
    "name": "Santosh V Potkule",
    "designation": "V Driver",
    "phone": 9004470757
  },
  {
    "name": "K V Dilipkumar",
    "designation": "V Driver",
    "phone": 9004470759
  },
  {
    "name": "Angamuthu Haridas",
    "designation": "V Driver",
    "phone": 9004470766
  },
  {
    "name": "Chandrakant A Chavan",
    "designation": "V Driver",
    "phone": 9004470767
  },
  {
    "name": "Anil Mukund Gharat",
    "designation": "V Driver",
    "phone": 9004470768
  },
  {
    "name": "Natha Baba Mahadik",
    "designation": "V Driver",
    "phone": 9004470769
  },
  {
    "name": "Mohamed Sanaullah",
    "designation": "V Driver",
    "phone": 9004470770
  },
  {
    "name": "Sandeep M More",
    "designation": "V Driver",
    "phone": 9004470772
  },
  {
    "name": "Mathew Philip",
    "designation": "Executive Director (Financial Advisor) (ED-FA)",
    "phone": 9004470310, isHOD: true
  },
  {
    "name": "Debasish Mitra",
    "designation": "General Manager/Finance",
    "phone": 9004470312, isHOD: true
  },
  {
    "name": "Vinayak P Salvi",
    "designation": "Dy FA&CAO (ACC)",
    "phone": 9004470412, isHOD: true
  },
  {
    "name": "Arup Bagui",
    "designation": "Dy FA&CAO (TAX & ESTB)",
    "phone": 9004470313, isHOD: true
  },
  {
    "name": "Manoj Panda",
    "designation": "Dy FA&CAO(FINANCE & TRAFFIC)",
    "phone": 9004470315, isHOD: true
  },
  {
    "name": "Brajesh Kumar",
    "designation": "Sr.AFA/Project",
    "phone": 9004470317, isHOD: true
  },
  {
    "name": "Manguesh Kumar Achari",
    "designation": "Sr.AFA/BILLs",
    "phone": 9004470316, isHOD: true
  },
  {
    "name": "S Shankarnarayan",
    "designation": "Sr.AFA/T",
    "phone": 9004470415, isHOD: true
  },
  {
    "name": "Akshaya Atul Mapara",
    "designation": "Sr.AFA/F",
    "phone": 9004470609, isHOD: true
  },
  {
    "name": "Vandana Ulhas Karve",
    "designation": "AAO/ESTB",
    "phone": 9004470514, isHOD: true
  },
  {
    "name": "Kunal Agrawal",
    "designation": "AAO/Book",
    "phone": 9004470414, isHOD: true
  },
  {
    "name": "Nisha D'Souza",
    "designation": "Sr.SO",
    "phone": 9004470612
  },
  {
    "name": "Shailaja N Kunder",
    "designation": "Sr.SO",
    "phone": 9004470607
  },
  {
    "name": "S S Raut",
    "designation": "Sr.SO",
    "phone": 9004470516
  },
  {
    "name": "Ayub M Kadrekar",
    "designation": "Sr.SO",
    "phone": 9004470513
  },
  {
    "name": "Vidula S Mane",
    "designation": "Sr.SO",
    "phone": 9004470413
  },
  {
    "name": "Subhash Vitthal Kase",
    "designation": "Sr.SO",
    "phone": 9004470613
  },
  {
    "name": "P G Patil",
    "designation": "Sr.SO",
    "phone": 9004470611
  },
  {
    "name": "Rahul Laxman Pawar",
    "designation": "Sr.AA",
    "phone": 9004470512
  },
  {
    "name": "Anant R Rovalekar",
    "designation": "Sr.AA",
    "phone": 9004470610
  },
  {
    "name": "Goutami M Dhotre",
    "designation": "Sr.AA",
    "phone": 9004470511
  },
  {
    "name": "Elizabeth Joshua",
    "designation": "PS/FA&CAO",
    "phone": 9004470559
  },
  {
    "name": "Alpesh Patil",
    "designation": "AA/(Proj)",
    "phone": 9321976421
  },
  {
    "name": "A Gurunathan",
    "designation": "General Assistant (GA)",
    "phone": 9004470519
  },
  {
    "name": "Sushanta Pradhan",
    "designation": "B.Peon",
    "phone": 7400408710
  },
  {
    "name": "Atul Singh",
    "designation": "Resi.Audit officer",
    "phone": 9004470740
  },
  {
    "name": "Ashutosh Shrivastava",
    "designation": "Chief Commercial MAnager (CCM)",
    "phone": 9004470391, isHOD: true
  },
  {
    "name": "Dinesh G Bonde",
    "designation": "Dy CCM",
    "phone": 9004470394, isHOD: true
  },
  {
    "name": "Sunil Narkar",
    "designation": "Dy CCM",
    "phone": 9004470393, isHOD: true
  },
  {
    "name": "Rajendra D Gholap",
    "designation": "Dy CCM",
    "phone": 9004470494, isHOD: true
  },
  {
    "name": "Leora D'cunha",
    "designation": "ACM",
    "phone": 9004470489, isHOD: true
  },
  {
    "name": "Rajesh M Desai",
    "designation": "Sr.CS",
    "phone": 9004470587
  },
  {
    "name": "Sushil Bambulkar",
    "designation": "Sr.CS",
    "phone": 9004470588
  },
  {
    "name": "Soniya R Mochemadkar",
    "designation": "Sr.CS",
    "phone": 9004470973
  },
  {
    "name": "Santosh Pawale",
    "designation": "Sr.CS",
    "phone": 9004470592
  },
  {
    "name": "Shailesh G Sawant",
    "designation": "Sr.CS",
    "phone": 9004470596
  },
  {
    "name": "Pravin Daware",
    "designation": "CS",
    "phone": 9004470597
  },
  {
    "name": "Dinesh Laxman Patil",
    "designation": "CS",
    "phone": 9004470590
  },
  {
    "name": "Ramesh G Mundekar",
    "designation": "Head TE",
    "phone": 9004470591
  },
  {
    "name": "Nitin H Sonawane",
    "designation": "Sr.CA",
    "phone": 9004470760
  },
  {
    "name": "Rajesh Aundhakar",
    "designation": "Sr.SE",
    "phone": 9004470771
  },
  {
    "name": "Pratik Patil",
    "designation": "Goods Train Manager (GTM)",
    "phone": 9004470773
  },
  {
    "name": "Rajan Bandelkar",
    "designation": "Sr TE",
    "phone": 9004470630
  },
  {
    "name": "Mangala Mahadik",
    "designation": "Sr TE",
    "phone": 9004470631
  },
  {
    "name": "Deepa R Achari",
    "designation": "Jr.Comm.Asst",
    "phone": 9004470692
  },
  {
    "name": "Surendra S More",
    "designation": "APWS",
    "phone": 9004470669
  },
  {
    "name": "Commercial Control",
    "designation": "Controller",
    "phone": 9004447299
  },
  {
    "name": "SMS service",
    "designation": "SMS service",
    "phone": 9004470700
  },
  {
    "name": "Sharvan Seva",
    "designation": "Sharvan Seva",
    "phone": 9664044456
  },
  {
    "name": "Satyendra K Shukla",
    "designation": "ED( Business & Operations)",
    "phone": 9004470340, isHOD: true
  },
  {
    "name": "Krishna Lambani",
    "designation": "Chief Project Manager (Electrical) (CPM-EL)",
    "phone": 9004470342, isHOD: true
  },
  {
    "name": "P K Kurade",
    "designation": "Dy Chief Project Manager (TRD) (Dy CPM)",
    "phone": 9004470441, isHOD: true
  },
  {
    "name": "G K Lakhera",
    "designation": "Dy CEE/Hubali",
    "phone": 7400408742, isHOD: true
  },
  {
    "name": "Om Prakash Verma",
    "designation": "AEE/HQ",
    "phone": 9004470542, isHOD: true
  },
  {
    "name": "Abhishek Kumar",
    "designation": "SEE",
    "phone": 9004470442, isHOD: true
  },
  {
    "name": "Rajat Sinha",
    "designation": "SEE /PROJ",
    "phone": 9004470443, isHOD: true
  },
  {
    "name": "Vishal Kumar",
    "designation": "SEE",
    "phone": 9004470343, isHOD: true
  },
  {
    "name": "J F Mandumpala",
    "designation": "SEE/E.M.",
    "phone": 9004470545, isHOD: true
  },
  {
    "name": "Arun Sudam Rodekar",
    "designation": "SSE/EL/HQ",
    "phone": 9004470541, isHOD: true
  },
  {
    "name": "Abhijit B Rawool",
    "designation": "SSE/EL/Maint.",
    "phone": 9004470544, isHOD: true
  },
  {
    "name": "Omkar Bagatkar",
    "designation": "SSE",
    "phone": 9004470641
  },
  {
    "name": "Ms Snehal S Sawant",
    "designation": "SSE",
    "phone": 8591941840
  },
  {
    "name": "Tushar Rajput",
    "designation": "SSE",
    "phone": 8591941841
  },
  {
    "name": "Chetan Chaudhari",
    "designation": "SSE",
    "phone": 8591941842
  },
  {
    "name": "Jitendra S Sonawane",
    "designation": "SSE",
    "phone": 9004470642
  },
  {
    "name": "Karunakara",
    "designation": "SSE",
    "phone": 9004470643
  },
  {
    "name": "P B Patil",
    "designation": "SSE",
    "phone": 9004470644
  },
  {
    "name": "P S Dande",
    "designation": "SSE",
    "phone": 9004470586
  },
  {
    "name": "D R Sawant",
    "designation": "JEE",
    "phone": 9004470540
  },
  {
    "name": "Sanjay Thakur",
    "designation": "JEE",
    "phone": 9321976447
  },
  {
    "name": "H A Godse",
    "designation": "JEE",
    "phone": 8591941844
  },
  {
    "name": "Subodh Sonawane",
    "designation": "JEE",
    "phone": 8591941845
  },
  {
    "name": "Suraj M Shinge",
    "designation": "JEE",
    "phone": 8591941846
  },
  {
    "name": "Nikil Patil",
    "designation": "JEE",
    "phone": 8591941847
  },
  {
    "name": "Achut R Kadam",
    "designation": "MCM/EL",
    "phone": 9004470547
  },
  {
    "name": "Sreenivas N Eppawar",
    "designation": "TECLI-I",
    "phone": 9004470549
  },
  {
    "name": "Nilesh Khimsuria",
    "designation": "TECL",
    "phone": 9004470546
  },
  {
    "name": "Tushar Nagothkar",
    "designation": "TECL",
    "phone": 9004470761
  },
  {
    "name": "Namrata Sabale",
    "designation": "TECL-III",
    "phone": 8591941848
  },
  {
    "name": "Purnima S Deorukhakar",
    "designation": "Sr CL",
    "phone": 9004470349
  },
  {
    "name": "Angelina T Gomes",
    "designation": "PS/CEE",
    "phone": 9004470359
  },
  {
    "name": "TPC Control",
    "designation": "TPC Control",
    "phone": 9004470543
  },
  {
    "name": "Electrical Control",
    "designation": "TPC",
    "phone": 9004447699
  },
  {
    "name": "Brij Kumar Yadav",
    "designation": "General Assistant (GA)",
    "phone": 9004470925
  },
  {
    "name": "Nagadath R Rao",
    "designation": "Principal Chief Engineer (PCE)",
    "phone": 9004470320, isHOD: true
  },
  {
    "name": "Sudhir Kulkarni",
    "designation": "Dy CE/HQ",
    "phone": 9004470321, isHOD: true
  },
  {
    "name": "P G R Nair",
    "designation": "Dy CE/Bridge",
    "phone": 9004470324, isHOD: true
  },
  {
    "name": "Uday Bhaskar",
    "designation": "Dy CE/T",
    "phone": 9004470326, isHOD: true
  },
  {
    "name": "Uday Walvalkar",
    "designation": "EA/Tech/Dir W&W",
    "phone": 9004470456, isHOD: true
  },
  {
    "name": "Ibrahim Mohammed",
    "designation": "AEN/W",
    "phone": 9004470323, isHOD: true
  },
  {
    "name": "Seema G",
    "designation": "AEN/TR",
    "phone": 9004470521, isHOD: true
  },
  {
    "name": "Sanjay D Phatkare",
    "designation": "SSE/Works",
    "phone": 9004470520
  },
  {
    "name": "M P Ughade",
    "designation": "SSE",
    "phone": 9004470522
  },
  {
    "name": "Srinivas G Joshi",
    "designation": "SSE",
    "phone": 9004470722
  },
  {
    "name": "R S Sathyanaryan",
    "designation": "SSE",
    "phone": 9004470713
  },
  {
    "name": "N D Palav",
    "designation": "SSE/CTRL",
    "phone": 9004470721
  },
  {
    "name": "Santosh Kumar",
    "designation": "SSE/CTRL",
    "phone": 9004470723
  },
  {
    "name": "Somnath S Vinchurkar",
    "designation": "SSE/CTRL",
    "phone": 9004470725
  },
  {
    "name": "Jayashree Narayanan",
    "designation": "PS/CE",
    "phone": 9004470503
  },
  {
    "name": "Kanchan Narvankar",
    "designation": "OS",
    "phone": 9321724668
  },
  {
    "name": "A VijayKumar",
    "designation": "SUP/PW",
    "phone": 9004470714
  },
  {
    "name": "Madan D Gawai",
    "designation": "JE/CI/II",
    "phone": 9004470711
  },
  {
    "name": "Mamta S Chandorkar",
    "designation": "JE/CI/II",
    "phone": 9004470712
  },
  {
    "name": "P M Kadam",
    "designation": "Technician/W",
    "phone": 9004470726
  },
  {
    "name": "Jayant Shinde",
    "designation": "Technician/KRV",
    "phone": 9004470524
  },
  {
    "name": "Civil Complaints at KRV",
    "designation": "MCM/KRV",
    "phone": 9004470525
  },
  {
    "name": "Civil Complaints at CO.Office",
    "designation": "MCM/CO",
    "phone": 9004470526
  },
  {
    "name": "Engineering Control",
    "designation": "Controller",
    "phone": 9004447399
  },
  {
    "name": "V K Rajendran",
    "designation": "Head Cook",
    "phone": 9004470527
  },
  {
    "name": "Sunil Kumar M Sahani",
    "designation": "Cook",
    "phone": 9004470528
  },
  {
    "name": "M R Dhananjayulu",
    "designation": "Cook",
    "phone": 9004470765
  },
  {
    "name": "T K Dineshkumar",
    "designation": "ED/PROJECTS",
    "phone": 9004470422, isHOD: true
  },
  {
    "name": "Rajesh K",
    "designation": "CPM/INFRA",
    "phone": 9004470485, isHOD: true
  },
  {
    "name": "Vishal Bhatti",
    "designation": "ADD.CPM/FAB/INSP",
    "phone": 9004470457, isHOD: true
  },
  {
    "name": "Manoj C Baddkar",
    "designation": "ADD.CPM",
    "phone": 9004470424, isHOD: true
  },
  {
    "name": "Birendra Kumar",
    "designation": "Dy CE/TVC",
    "phone": 9004470488, isHOD: true
  },
  {
    "name": "T Subramanyam",
    "designation": "Dy CE",
    "phone": 9004470459, isHOD: true
  },
  {
    "name": "H K Bhagawan",
    "designation": "DGM/Khurda-Bolangir Proj",
    "phone": 9004470498, isHOD: true
  },
  {
    "name": "S R Patil",
    "designation": "AEN/DL/MNI",
    "phone": 9004470458, isHOD: true
  },
  {
    "name": "Anirudha Sahu",
    "designation": "AEN/P",
    "phone": 9004470487, isHOD: true
  },
  {
    "name": "Deepak Sande",
    "designation": "AEN/VTCL/BLP",
    "phone": 9004470483, isHOD: true
  },
  {
    "name": "Maru Murlidhar",
    "designation": "SSE",
    "phone": 9004470701
  },
  {
    "name": "K S Kubal",
    "designation": "SSE",
    "phone": 9004470708
  },
  {
    "name": "Pushkar V Mahajan",
    "designation": "SSE/Civil",
    "phone": 9004470754
  },
  {
    "name": "Rajendra M Diwate",
    "designation": "JE/Civil",
    "phone": 9004470764
  },
  {
    "name": "D E Rane",
    "designation": "JE/Gadarvara",
    "phone": 9004470435
  },
  {
    "name": "Beena Padmanabhan.",
    "designation": "PS/GM/PROJ",
    "phone": 9004470709
  },
  {
    "name": "Rajesh A Mankar",
    "designation": "OS",
    "phone": 9004470704
  },
  {
    "name": "Bindu Muralidharan",
    "designation": "ED(IT)",
    "phone": 9004470335, isHOD: true
  },
  {
    "name": "Sunil Rathod",
    "designation": "Dy CMIT",
    "phone": 9004470436, isHOD: true
  },
  {
    "name": "Yogesh Kurkure",
    "designation": "Dy CMIT(HQ)",
    "phone": 9004470338, isHOD: true
  },
  {
    "name": "Mallika M",
    "designation": "AMIT/I",
    "phone": 9004470622, isHOD: true
  },
  {
    "name": "Pooja Khekare",
    "designation": "AMIT/S",
    "phone": 9004470623, isHOD: true
  },
  {
    "name": "Mabel D'souza",
    "designation": "SA/IT",
    "phone": 9004470621
  },
  {
    "name": "Prathiba Kadam",
    "designation": "SA/IT",
    "phone": 9004470624
  },
  {
    "name": "Rohini Patil",
    "designation": "SA/IT",
    "phone": 9004470625
  },
  {
    "name": "Nevile Monterio",
    "designation": "Sr SP/IT",
    "phone": 9004470626
  },
  {
    "name": "Santosh Mane",
    "designation": "Sr SP/IT",
    "phone": 9004470627
  },
  {
    "name": "Dilip Choudhary",
    "designation": "Sr SP/IT",
    "phone": 9004470629
  },
  {
    "name": "Dinesh S Bole",
    "designation": "SP",
    "phone": 9004470632
  },
  {
    "name": "Shridhar Deshbhandari",
    "designation": "SP",
    "phone": 9004470633
  },
  {
    "name": "Mahesh Jage",
    "designation": "SP",
    "phone": 9004470635
  },
  {
    "name": "R Thangam",
    "designation": "SP",
    "phone": 9004470637
  },
  {
    "name": "K Durgaprasad",
    "designation": "SP",
    "phone": 9004470628
  },
  {
    "name": "Kavita Mhatre",
    "designation": "SP",
    "phone": 9004470638
  },
  {
    "name": "Rajesh",
    "designation": "SP",
    "phone": 9004470652
  },
  {
    "name": "Amit Hari Chavan",
    "designation": "SP",
    "phone": 9004470653
  },
  {
    "name": "Pradnya Vijay Jadhav",
    "designation": "SP",
    "phone": 9004470654
  },
  {
    "name": "Sagar Sanjay Sanap",
    "designation": "SP",
    "phone": 9004470655
  },
  {
    "name": "Prafulla A Shendge",
    "designation": "SP",
    "phone": 9004470656
  },
  {
    "name": "Pramod Hiru Kase",
    "designation": "SP",
    "phone": 9004470665
  },
  {
    "name": "Amruta Ashok Sondkar",
    "designation": "SP",
    "phone": 9004470667
  },
  {
    "name": "Kastubh M Amberdekar",
    "designation": "SP",
    "phone": 9004470668
  },
  {
    "name": "Shweta Laxman Shanbhag",
    "designation": "SP",
    "phone": 9004470691
  },
  {
    "name": "Chakor Vilas Sarmalkar",
    "designation": "SP",
    "phone": 9004470693
  },
  {
    "name": "Tanmay Dhumal",
    "designation": "JSP",
    "phone": 9004470636
  },
  {
    "name": "Ananya Ullal",
    "designation": "PS/CMIT",
    "phone": 9004470339
  },
  {
    "name": "Anita Sunil",
    "designation": "OS",
    "phone": 9004470640
  },
  {
    "name": "IT Control",
    "designation": "Controller",
    "phone": 9004470555
  },
  {
    "name": "Dinesh K Gajbhiye",
    "designation": "Chief Mechanical Engineer (CME)",
    "phone": 9004470350, isHOD: true
  },
  {
    "name": "Updendra Shendye",
    "designation": "CPM(MECH)",
    "phone": 9004470351, isHOD: true
  },
  {
    "name": "B T Rajanna",
    "designation": "DyCME(HQ)",
    "phone": 9004470352, isHOD: true
  },
  {
    "name": "Rajesh Hombal",
    "designation": "Sr MGR/PROJ/Nepal",
    "phone": 9004470382, isHOD: true
  },
  {
    "name": "P G Purushothaman",
    "designation": "SME/PROJ",
    "phone": 9004470551, isHOD: true
  },
  {
    "name": "Shubham Pandey",
    "designation": "AME",
    "phone": 9004470451, isHOD: true
  },
  {
    "name": "Sanjay Khatri",
    "designation": "SSE/MECH",
    "phone": 9004470552
  },
  {
    "name": "Ziyauddin Adam Mukadam",
    "designation": "SSE/MECH",
    "phone": 9004470553
  },
  {
    "name": "Sandip Z Shirke",
    "designation": "JE/M/II",
    "phone": 9004470366
  },
  {
    "name": "Sunil Batwadi Shetty",
    "designation": "JE/M/II",
    "phone": 9004470550
  },
  {
    "name": "Mini Dinesh Bangera",
    "designation": "PS/CME",
    "phone": 9004470504
  },
  {
    "name": "Nitin Dhondu Gurav",
    "designation": "LPC",
    "phone": 9004470554
  },
  {
    "name": "Ajit B Gotpagar",
    "designation": "LPC",
    "phone": 9004470557
  },
  {
    "name": "Wilson Babu C M",
    "designation": "MCM/M",
    "phone": 9004470895
  },
  {
    "name": "P K Mangade",
    "designation": "PCOR/MCM",
    "phone": 9004470556
  },
  {
    "name": "Mechanical Control",
    "designation": "Controller",
    "phone": 9004447599
  },
  {
    "name": "Jeetendra Kumar Kurmi",
    "designation": "KH/M",
    "phone": 9004470659
  },
  {
    "name": "Rajkaumar P Sharma",
    "designation": "KH/M",
    "phone": 9004470558
  },
  {
    "name": "Dr Rajanish Shetty",
    "designation": "Principal Chief Medical Officer (PCMO)",
    "phone": 9004470356, isHOD: true
  },
  {
    "name": "Dr Gazal Chougule",
    "designation": "Dy CMO",
    "phone": 9004470357
  },
  {
    "name": "Ancy Sebastian",
    "designation": "PHN",
    "phone": 9004470530
  },
  {
    "name": "Harshal Patil",
    "designation": "Health Inspector (HI)",
    "phone": 9004470531
  },
  {
    "name": "Smita Ganesh",
    "designation": "Health Inspector (HI)",
    "phone": 9004470532
  },
  {
    "name": "Subhangi Gade",
    "designation": "CH OS",
    "phone": 9004470562
  },
  {
    "name": "Bindu S Narkar",
    "designation": "PS/CMO",
    "phone": 9004470319
  },
  {
    "name": "Syed Jilani",
    "designation": "MPHW",
    "phone": 9004470533
  },
  {
    "name": "Sanjay D Khairnar",
    "designation": "MPHW",
    "phone": 9004470537
  },
  {
    "name": "Sreenivasulu B H",
    "designation": "MPHW",
    "phone": 9004470536
  },
  {
    "name": "Vani I Naik",
    "designation": "MPHW",
    "phone": 7400408735
  },
  {
    "name": "Malini V Naik",
    "designation": "MPHW",
    "phone": 7400408736
  },
  {
    "name": "P Barik",
    "designation": "General Assistant (GA)",
    "phone": 9004470534
  },
  {
    "name": "Medical Control",
    "designation": "Controller",
    "phone": 9004470777
  },
  {
    "name": "V C Sinha",
    "designation": "PCOM/PROJ",
    "phone": 9004470481, isHOD: true
  },
  {
    "name": "Ashutosh Shrivastava",
    "designation": "COM(Additional Charge )",
    "phone": 9004470380, isHOD: true
  },
  {
    "name": "C K Thobias",
    "designation": "Dy COM",
    "phone": 9004470381, isHOD: true
  },
  {
    "name": "Vedant Kaushik",
    "designation": "AOM/Control",
    "phone": 9004470780, isHOD: true
  },
  {
    "name": "Suvarna S Barde",
    "designation": "PS/COM",
    "phone": 9004470389
  },
  {
    "name": "Mihir Kumar Jha",
    "designation": "Sr.SM",
    "phone": 9004470717
  },
  {
    "name": "Suresh I Naik",
    "designation": "Sr.SM",
    "phone": 9004470720
  },
  {
    "name": "Sanjay Kumar",
    "designation": "Sr.SM/AE",
    "phone": 9004470781
  },
  {
    "name": "Kiran Dali",
    "designation": "Sr.SM",
    "phone": 9004470790
  },
  {
    "name": "Ajit K Patra",
    "designation": "Sr.SM",
    "phone": 9004470797
  },
  {
    "name": "Rajendra Kumar",
    "designation": "Sr.SM",
    "phone": 9004470867
  },
  {
    "name": "Sujit Kumar",
    "designation": "Sr.SM",
    "phone": 9004470788
  },
  {
    "name": "M P Lokesh",
    "designation": "Sr.SM",
    "phone": 9004470883
  },
  {
    "name": "Sanjay D Patwardhan",
    "designation": "Sr.AS",
    "phone": 9004470796
  },
  {
    "name": "Shashikant M Wadhaval",
    "designation": "SM",
    "phone": 9004470798
  },
  {
    "name": "Shivanand R Hariyan",
    "designation": "SM",
    "phone": 9004470795
  },
  {
    "name": "Alka Swapnil Thanekar",
    "designation": "SM",
    "phone": 9004470782
  },
  {
    "name": "Deepak Bapu Jadhav",
    "designation": "SM",
    "phone": 9004470783
  },
  {
    "name": "Digamber Butkar",
    "designation": "SM",
    "phone": 9004470946
  },
  {
    "name": "Vikas K Devadiga",
    "designation": "SM",
    "phone": 9004470787
  },
  {
    "name": "Devendra T Ahire",
    "designation": "Dy CHC",
    "phone": 9004470785
  },
  {
    "name": "Manish S Korade",
    "designation": "Dy CHC",
    "phone": 9004470791
  },
  {
    "name": "Rajesh Kumar Singh",
    "designation": "Mail Express Train Manager (METM)/BEL",
    "phone": 9004470786
  },
  {
    "name": "Pradeep M Thanekar",
    "designation": "Mail Express Train Manager (METM)/BEL",
    "phone": 9004470789
  },
  {
    "name": "Madukar V Naik",
    "designation": "Mail Express Train Manager (METM)/BEL",
    "phone": 9004470793
  },
  {
    "name": "Sachin S Ambre",
    "designation": "GTM",
    "phone": 9004470482
  },
  {
    "name": "Sumit J Kadam",
    "designation": "GTM",
    "phone": 9004470959
  },
  {
    "name": "Satyavijay R Kadu",
    "designation": "GTM",
    "phone": 9004470966
  },
  {
    "name": "Uday Manju Chadan",
    "designation": "GTM",
    "phone": 9004470885
  },
  {
    "name": "Manish Kumar",
    "designation": "PTM",
    "phone": 9004470926
  },
  {
    "name": "Vivek C Kokate",
    "designation": "TNCI/MA",
    "phone": 9004470866
  },
  {
    "name": "Operating Control",
    "designation": "Controller",
    "phone": 9004447199
  },
  {
    "name": "B B Nikam",
    "designation": "CPO",
    "phone": 9004470360, isHOD: true
  },
  {
    "name": "P V Salgaonkar",
    "designation": "Dy CPO/HQ",
    "phone": 9004470469, isHOD: true
  },
  {
    "name": "Sayali Shinde",
    "designation": "SPO",
    "phone": 9004470362, isHOD: true
  },
  {
    "name": "Gnanadeep Sangadala",
    "designation": "SPO",
    "phone": 9004470363, isHOD: true
  },
  {
    "name": "Purnima Mayekar",
    "designation": "PI/I",
    "phone": 9004470567
  },
  {
    "name": "Utkarsha U Nanaware",
    "designation": "CHOS",
    "phone": 9004470568
  },
  {
    "name": "Vaishali Yerunkar",
    "designation": "OS",
    "phone": 9004470378
  },
  {
    "name": "Kiran K Sarafdar",
    "designation": "OS",
    "phone": 9004470515
  },
  {
    "name": "Jafar G Shaikh",
    "designation": "OS",
    "phone": 9004470662
  },
  {
    "name": "D S Raut",
    "designation": "OS",
    "phone": 9004470663
  },
  {
    "name": "Vasantha B Poojari",
    "designation": "OS",
    "phone": 9004470639
  },
  {
    "name": "Ishwar J Naik",
    "designation": "OS",
    "phone": 9004470664
  },
  {
    "name": "Dinesh Dudumkar",
    "designation": "OS",
    "phone": 9004470348
  },
  {
    "name": "Anand Ramteke",
    "designation": "OS",
    "phone": 9321724667
  },
  {
    "name": "Pratiksha Govit",
    "designation": "OS",
    "phone": 9004470661
  },
  {
    "name": "Snehal R Patil",
    "designation": "OS",
    "phone": 9004470505
  },
  {
    "name": "Suchita Ghag",
    "designation": "PS/CPO",
    "phone": 9004470369
  },
  {
    "name": "Jyothi R Joshi",
    "designation": "PS",
    "phone": 9004470328
  },
  {
    "name": "Ninad Pagedar",
    "designation": "Sr.Clerk",
    "phone": 9004470560
  },
  {
    "name": "Sanjeeb Kumar Gupta",
    "designation": "B Peon",
    "phone": 9004470774
  },
  {
    "name": "Staff Grievences",
    "designation": "Staff Grievences",
    "phone": 9004470444
  },
  {
    "name": "Settlement Cell",
    "designation": "Settlement Cell",
    "phone": 9004470666
  },
  {
    "name": "Ramnath M Patil",
    "designation": "Zonal President/AIOBCREA",
    "phone": 9004470718
  },
  {
    "name": "Narayan Das Ahirwar",
    "designation": "Zonal President /AISCSTREA",
    "phone": 9004470719
  },
  {
    "name": "P M Mahajan",
    "designation": "Zonal Sec./AIOBCREA",
    "phone": 7400408748
  },
  {
    "name": "Zonal Sec./AISCSTREA",
    "designation": "Zonal Sec./AISCSTREA",
    "phone": 9004470735
  },
  {
    "name": "Ketan Khedekar",
    "designation": "Regional Sec./AIOBCREA ( Belapur Committee)",
    "phone": 9312965821
  },
  {
    "name": "Santosh Yadav",
    "designation": "Regional Sec./AIOBCREA ( Ratnagiri Committee)",
    "phone": 9834161087
  },
  {
    "name": "Ajay Korgaonkar",
    "designation": "Regional Sec./AIOBCREA ( Karwar Committee)",
    "phone": 9004476088
  },
  {
    "name": "Sadanand K Chitale",
    "designation": "Asst. Rajbhasha Adhikari",
    "phone": 9004470365
  },
  {
    "name": "Shreya S Kakade",
    "designation": "OS",
    "phone": 9004470566
  },
  {
    "name": "Sitaram V Dubey",
    "designation": "Sr.HTYPCL",
    "phone": 9004470565
  },
  {
    "name": "Priya N Pokale",
    "designation": "Sr.RAJ.ASST",
    "phone": 9004470589
  },
  {
    "name": "Ashish Apte",
    "designation": "PCSTE",
    "phone": 9004470370, isHOD: true
  },
  {
    "name": "D Magesh",
    "designation": "CSTE(P&W)",
    "phone": 9004470372, isHOD: true
  },
  {
    "name": "Ganesh Krishnan",
    "designation": "Dy CSTE/PDMC",
    "phone": 9004470373, isHOD: true
  },
  {
    "name": "Ch Ramesh Babu",
    "designation": "Dy CSTE/HQ",
    "phone": 9004470374, isHOD: true
  },
  {
    "name": "S N Todkar",
    "designation": "Dy CSTE/PROJ/I",
    "phone": 9004470471, isHOD: true
  },
  {
    "name": "M M Toraskar",
    "designation": "SSTE/P&D",
    "phone": 9004470472
  },
  {
    "name": "Byju John",
    "designation": "SSTE/NEPAL",
    "phone": 9004047075
  },
  {
    "name": "S Noor Mohammed",
    "designation": "SSTE/HQ",
    "phone": 9004470473
  },
  {
    "name": "Sagar Gothane",
    "designation": "SSTE/PDMC",
    "phone": 9004470484
  },
  {
    "name": "Ankush Kumar",
    "designation": "SSTE/W",
    "phone": 9004470475
  },
  {
    "name": "Kiran Shetty",
    "designation": "ASTE/NTPC",
    "phone": 9004470474
  },
  {
    "name": "Balakrishna S Naik",
    "designation": "SSE/S&T/HQ",
    "phone": 9004470572
  },
  {
    "name": "Sanjeev Kumar",
    "designation": "SSE/S&T/BLP",
    "phone": 9004470573
  },
  {
    "name": "V G Mestry",
    "designation": "SSE/S&T/NET",
    "phone": 9004470584
  },
  {
    "name": "P N Deodhar",
    "designation": "SSE/S&T/S&E",
    "phone": 9004470672
  },
  {
    "name": "G A Salunke",
    "designation": "SSE/S&T/P&W",
    "phone": 9004470571
  },
  {
    "name": "S E Kanse",
    "designation": "SSE/S&T/NTPC",
    "phone": 9004470570
  },
  {
    "name": "S G Khedekar",
    "designation": "SSE/S&T/NTPC",
    "phone": 9004470671
  },
  {
    "name": "Tushar Sawant",
    "designation": "SSE/S&T/DESIGN",
    "phone": 9004470580
  },
  {
    "name": "Anurag Pande",
    "designation": "SSE/S&T/DRG",
    "phone": 9004470684
  },
  {
    "name": "Ravi Suryavanshi",
    "designation": "SSE/OA/S&T",
    "phone": 9004470575
  },
  {
    "name": "Prashant Naik",
    "designation": "SSE/DRG/II",
    "phone": 9004470577
  },
  {
    "name": "S Khaladkar",
    "designation": "SSE/CTRL",
    "phone": 9004470581
  },
  {
    "name": "Janardan Dabholkar",
    "designation": "STA/S&T",
    "phone": 9004470670
  },
  {
    "name": "Kiran Shinde",
    "designation": "JTA/S&T",
    "phone": 9004470574
  },
  {
    "name": "Pushpak Virkar",
    "designation": "JTA/DRG/S&T",
    "phone": 9004470576
  },
  {
    "name": "V M Patil",
    "designation": "JTA/DRG/S&T",
    "phone": 9004470677
  },
  {
    "name": "Nilesh Baikar",
    "designation": "JTA/DRG/S&T",
    "phone": 9004470578
  },
  {
    "name": "C G Chikane",
    "designation": "JE/S&T/RM",
    "phone": 9004470579
  },
  {
    "name": "S V Kulkarni",
    "designation": "JE/S&T/NTCP",
    "phone": 9004470683
  },
  {
    "name": "Madhura Tambe",
    "designation": "JE/S&T/CTRL",
    "phone": 9004470775
  },
  {
    "name": "Santosh Pandav",
    "designation": "JE/S&T/CTRL",
    "phone": 9004470776
  },
  {
    "name": "Swapnil Sawant",
    "designation": "JE/S&T/CTRL",
    "phone": 9004470778
  },
  {
    "name": "Atul A Pote",
    "designation": "JE/S&T/CTRL/RG",
    "phone": 9004470674
  },
  {
    "name": "Keerthi B",
    "designation": "JE/S&T/NTPC/GAD",
    "phone": 9004470681
  },
  {
    "name": "Sanjay Pawar",
    "designation": "JE/S&T/NTPC/GAD",
    "phone": 9004470582
  },
  {
    "name": "Sharad Devrukhkar",
    "designation": "JE/S&T",
    "phone": 9004470745
  },
  {
    "name": "Rashmi Naik",
    "designation": "PS TO PCSTE",
    "phone": 9004470379
  },
  {
    "name": "Tukaram Kolpe",
    "designation": "OS/S&T",
    "phone": 9004036075
  },
  {
    "name": "Santosh Thakur",
    "designation": "MCM/NET",
    "phone": 9004470679
  },
  {
    "name": "N P Patil",
    "designation": "MCM",
    "phone": 9004470673
  },
  {
    "name": "D Y Patil",
    "designation": "MCM",
    "phone": 9004470687
  },
  {
    "name": "Sarjerao Sapakal",
    "designation": "MCM",
    "phone": 9004470678
  },
  {
    "name": "Vincent Lobo",
    "designation": "MCM",
    "phone": 9004470583
  },
  {
    "name": "Raju Surthi",
    "designation": "ESTM/I",
    "phone": 9004470676
  },
  {
    "name": "P S Shinde",
    "designation": "ESTM/I",
    "phone": 9004470685
  },
  {
    "name": "Muse Gupta",
    "designation": "ESTM/II",
    "phone": 9004470675
  },
  {
    "name": "Samiuddin Dadarkar",
    "designation": "ESTM/II",
    "phone": 9004470682
  },
  {
    "name": "N B Mishal",
    "designation": "ESTM/III",
    "phone": 9004470589
  },
  {
    "name": "S&T controller",
    "designation": "Controller",
    "phone": 9004447499
  },
  {
    "name": "Sachin T Todkar",
    "designation": "B Peon",
    "phone": 9004470686
  },
  {
    "name": "N M Telang",
    "designation": "CSO",
    "phone": 9004470480, isHOD: true
  },
  {
    "name": "Manoj Kumar",
    "designation": "AOM/Safety",
    "phone": 9004470870, isHOD: true
  },
  {
    "name": "Deepali Nagotkar",
    "designation": "PS/CSO",
    "phone": 9004470479
  },
  {
    "name": "A K Sinha",
    "designation": "PCSC",
    "phone": 9004470330, isHOD: true
  },
  {
    "name": "Jubir Khan Pathan",
    "designation": "ASC/C&I",
    "phone": 9004470331
  },
  {
    "name": "Satish Menon",
    "designation": "ASC/HQ",
    "phone": 9004470753
  },
  {
    "name": "Neelesh Dube",
    "designation": "IPF",
    "phone": 9004470430
  },
  {
    "name": "Deo Kumar Gonda",
    "designation": "IPF",
    "phone": 9004470431
  },
  {
    "name": "Dinesh G Nair",
    "designation": "IPF",
    "phone": 9004470433, isHOD: true
  },
  {
    "name": "Rakesh Kumar Yadav",
    "designation": "SIPF",
    "phone": 9004470432
  },
  {
    "name": "SIPF",
    "designation": "SIPF",
    "phone": 9004470434
  },
  {
    "name": "Arun Anant Lot",
    "designation": "SIPF",
    "phone": 9004470732
  },
  {
    "name": "Abirami Murugavel",
    "designation": "PS/IG cum CSC",
    "phone": 9004470419
  },
  {
    "name": "P V Jadhav",
    "designation": "OS/RPF",
    "phone": 9004470439
  },
  {
    "name": "RPF Control",
    "designation": "RPF",
    "phone": 9004470730
  },
  {
    "name": "RPF Control Rail Madat",
    "designation": "RPF",
    "phone": 9004470731
  },
  {
    "name": "Arun Mehata",
    "designation": "COS",
    "phone": 9004470395, isHOD: true
  },
  {
    "name": "K Sitaramanujacharyulu",
    "designation": "Dy CMM",
    "phone": 9004470496, isHOD: true
  },
  {
    "name": "Michael W J",
    "designation": "Dy CMM/E",
    "phone": 9004470397, isHOD: true
  },
  {
    "name": "Mahajan S A",
    "designation": "SMM/T",
    "phone": 9004470398
  },
  {
    "name": "Chandrashekhar V Haval",
    "designation": "AMM/HQ",
    "phone": 9004470698
  },
  {
    "name": "K K Bharadwaj",
    "designation": "AMM",
    "phone": 9004470396
  },
  {
    "name": "Mangesh S Verlekar",
    "designation": "DMM",
    "phone": 9004470697
  },
  {
    "name": "V B Hodawadkar",
    "designation": "DMM",
    "phone": 9004470689
  },
  {
    "name": "S G Basavaraju",
    "designation": "DMS",
    "phone": 9004470695
  },
  {
    "name": "H A Gire",
    "designation": "DMS",
    "phone": 9004470688
  },
  {
    "name": "Sandeep Rathod",
    "designation": "DMS/P",
    "phone": 9004470747
  },
  {
    "name": "Madhavi Narvekar",
    "designation": "PS/COS",
    "phone": 9004470694
  },
  {
    "name": "Neha N Kadam",
    "designation": "Stores Asst.",
    "phone": 9004470727
  },
  {
    "name": "Suchita S Bamugade",
    "designation": "KH/S/1",
    "phone": 9004470728
  },
  {
    "name": "Narayan Shinde",
    "designation": "GA/I",
    "phone": 9004470729
  },
  {
    "name": "B K Gangte",
    "designation": "CVO",
    "phone": 9004470460, isHOD: true
  },
  {
    "name": "V V Shinde",
    "designation": "Dy CVO",
    "phone": 9004470345, isHOD: true
  },
  {
    "name": "D K Vinchurkar",
    "designation": "AVO",
    "phone": 9004470346
  },
  {
    "name": "Prasanna Kumar K H",
    "designation": "CVI",
    "phone": 9004470647
  },
  {
    "name": "Sudhir S Sidhaye",
    "designation": "CVI",
    "phone": 9004470646
  },
  {
    "name": "Pradip Deogharkar",
    "designation": "CVI",
    "phone": 9004470645
  },
  {
    "name": "Kaustubh Babar",
    "designation": "CVI",
    "phone": 9004470648
  },
  {
    "name": "Mahesh S Amrute",
    "designation": "CVI",
    "phone": 9004470658
  },
  {
    "name": "Asha Shetty",
    "designation": "RRM/KW",
    "phone": 9945047008, isHOD: true
  },
  {
    "name": "Gireesh Bhat",
    "designation": "OS/KW",
    "phone": 9686656215
  },
  {
    "name": "Prakash V",
    "designation": "PS/KW",
    "phone": 9686656112
  },
  {
    "name": "Jon Kunchirakkat J",
    "designation": "INST/II/MAO",
    "phone": 9686685315
  },
  {
    "name": "Shantala P Shetty",
    "designation": "INST",
    "phone": 9686685316
  },
  {
    "name": "U Raju",
    "designation": "INST/KRA/BTJL",
    "phone": 7483804195
  },
  {
    "name": "Shridhar Naik",
    "designation": "RHKH/KRA/BTJL",
    "phone": 9686628991
  },
  {
    "name": "Santosh Pednekar",
    "designation": "RPF",
    "phone": 7483804193
  },
  {
    "name": "Aravind Kumar",
    "designation": "RASO/KAWR",
    "phone": 9686656211, isHOD: true
  },
  {
    "name": "C B Jaiswal",
    "designation": "RFA/KW",
    "phone": 9686656201
  },
  {
    "name": "Krishnakumar L Shet",
    "designation": "SRAA/KW",
    "phone": 9686656151
  },
  {
    "name": "Vilas Gawade",
    "designation": "SRAA/KW",
    "phone": 9686656150
  },
  {
    "name": "Urmilla P Bandekar",
    "designation": "SRSO/KW",
    "phone": 9686656152
  },
  {
    "name": "Mahananda C Habbu",
    "designation": "SRSO/KW",
    "phone": 9686656153
  },
  {
    "name": "Mamatha Prakash",
    "designation": "SRSO/KAWR",
    "phone": 9686656163
  },
  {
    "name": "Bhojraj D Marshel",
    "designation": "SRSO/KAWR",
    "phone": 8431404597
  },
  {
    "name": "Ashok Paswan",
    "designation": "SRSO/KW",
    "phone": 9686043997
  },
  {
    "name": "Chikyya Devediga",
    "designation": "SRTIA/MAO",
    "phone": 9686688739
  },
  {
    "name": "K Sudha",
    "designation": "MNG/PR/TOK",
    "phone": 9686656125
  },
  {
    "name": "Nagapati N Hegde",
    "designation": "SRCS/MAO",
    "phone": 9686656126
  },
  {
    "name": "Ramesh Shetty",
    "designation": "CS/TOK",
    "phone": 9686656157
  },
  {
    "name": "Satyanarayan K Bhat",
    "designation": "CS/UD",
    "phone": 9686656158
  },
  {
    "name": "Sateesh K Hegde",
    "designation": "CS/SL",
    "phone": 9686656159
  },
  {
    "name": "Shalini R Naik",
    "designation": "SR CS/VEN ",
    "phone": 9686656160
  },
  {
    "name": "Kamalanabha Bayari",
    "designation": "Sr.CA/UD",
    "phone": 9686656161
  },
  {
    "name": "Taranath M Naik",
    "designation": "CS/TOK",
    "phone": 9686656162
  },
  {
    "name": "Uday Kumar",
    "designation": "Sr CA/UD",
    "phone": 9686656156
  },
  {
    "name": "Jagdish T Naik",
    "designation": "HEAD TE/MAQ ",
    "phone": 8310137938
  },
  {
    "name": "Gajanan Bhat",
    "designation": "HEAD TE/MAQ",
    "phone": 8310137941
  },
  {
    "name": "Siddappa Naik",
    "designation": "HEAD TE/MAQ",
    "phone": 8310137958
  },
  {
    "name": "Uday M Naik",
    "designation": "HEAD TE/MAQ",
    "phone": 8310137986
  },
  {
    "name": "Dinesh G Hedge",
    "designation": "HEAD TE/MAQ",
    "phone": 8310137990
  },
  {
    "name": "Gopala Poojari",
    "designation": "HEAD TE/MAQ",
    "phone": 8310137994
  },
  {
    "name": "Narayan K Hegde",
    "designation": "HEAD TE/MAQ",
    "phone": 8310138008
  },
  {
    "name": "Praksah V Kanson",
    "designation": "HEAD TE/MAQ",
    "phone": 8310138011
  },
  {
    "name": " Rajesh Devadiga",
    "designation": "HEAD TE/MAQ",
    "phone": 8310138014
  },
  {
    "name": "Sathish R N",
    "designation": "HEAD TE/MAQ",
    "phone": 8310138029
  },
  {
    "name": "K Vasudev Pai",
    "designation": "HEAD TE/MAQ",
    "phone": 8310138031
  },
  {
    "name": "Pradeep Kumar",
    "designation": "HEAD TE/MAQ",
    "phone": 8310138034
  },
  {
    "name": "Chandrakanth Shet M",
    "designation": "HEAD TE/MAQ",
    "phone": 8310138035
  },
  {
    "name": "Peter Devanand L",
    "designation": "HEAD TE/MAQ",
    "phone": 8310138045
  },
  {
    "name": "Kannan A",
    "designation": "HEAD TE/MAQ",
    "phone": 8310138050
  },
  {
    "name": "John Thomas",
    "designation": "HEAD TE/MAQ",
    "phone": 8310138051
  },
  {
    "name": "Rathnakar",
    "designation": "HEAD TE/MAQ",
    "phone": 8310138053
  },
  {
    "name": "Ganesh Padiyar",
    "designation": "HEAD TE/MAQ",
    "phone": 8310138054
  },
  {
    "name": "Babu K",
    "designation": "HEAD TE/MAQ",
    "phone": 8310138060
  },
  {
    "name": "Nagaraja",
    "designation": "HEAD TE/MAQ",
    "phone": 8310138062
  },
  {
    "name": " Suresh Kumar",
    "designation": "HEAD TE/MAQ",
    "phone": 8310138064
  },
  {
    "name": "Vasudeva P Acharya",
    "designation": "HEAD TE/MAQ",
    "phone": 8310138067
  },
  {
    "name": "H Nagaraja",
    "designation": "HEAD TE/MAQ",
    "phone": 8310138070
  },
  {
    "name": "Rajan R",
    "designation": "HEAD TE/MAQ",
    "phone": 8310138093
  },
  {
    "name": "Thimmappa S Gowda",
    "designation": "HEAD TE/MAQ",
    "phone": 8310138102
  },
  {
    "name": "Sasikumar E",
    "designation": "HEAD TE/MAQ",
    "phone": 8310138104
  },
  {
    "name": "P S Vinod",
    "designation": "HEAD TE/MAQ",
    "phone": 8310138149
  },
  {
    "name": "Manohar Poojari",
    "designation": "HEAD TE/MAQ",
    "phone": 8310138167
  },
  {
    "name": "Sheshayya D",
    "designation": "HEAD TE/MAQ",
    "phone": 8310138196
  },
  {
    "name": "Harish Poojari",
    "designation": "HEAD TE/MAQ",
    "phone": 8310138208
  },
  {
    "name": "Thyagaraj Babu P S",
    "designation": "HEAD TE/MAQ",
    "phone": 8310138237
  },
  {
    "name": "Ravichandra",
    "designation": "SR TE/1/MAQ ",
    "phone": 8310138245
  },
  {
    "name": "Maruthi D Naik",
    "designation": "HEAD TE/MAQ",
    "phone": 8310138263
  },
  {
    "name": "Damodara",
    "designation": "HEAD TE/MAQ",
    "phone": 8310138264
  },
  {
    "name": "Jagadish",
    "designation": "HEAD TE/MAQ",
    "phone": 8310138265
  },
  {
    "name": "Shrinivasa U",
    "designation": "SR TE/1/MAQ ",
    "phone": 8310138269
  },
  {
    "name": "Prakash S Hegde",
    "designation": "SR TE/1/MAQ ",
    "phone": 8310138273
  },
  {
    "name": "Srinivas Shetty",
    "designation": "SR TE/1/MAQ ",
    "phone": 8310138278
  },
  {
    "name": "Sudhakara Devadiga",
    "designation": "SR TE/1/MAQ ",
    "phone": 8310138279
  },
  {
    "name": "Raghavendra",
    "designation": "SR TE/1/MAQ ",
    "phone": 8310138281
  },
  {
    "name": " Ramesh Mogaveera",
    "designation": "SR TE/1/MAQ ",
    "phone": 8310138284
  },
  {
    "name": "Raveendra",
    "designation": "SR TE/1/MAQ ",
    "phone": 8310138289
  },
  {
    "name": "Pradeepa",
    "designation": "SR TE/1/MAQ ",
    "phone": 8310138339
  },
  {
    "name": "Raghavendra",
    "designation": "SR TE/1/MAQ ",
    "phone": 8310138340
  },
  {
    "name": "Ganapati T Mukri",
    "designation": "SR TE/1/MAQ ",
    "phone": 8310138343
  },
  {
    "name": "Parameshwar Naik",
    "designation": "SR TE/1/MAQ ",
    "phone": 8310138357
  },
  {
    "name": "Sabitha Shetty",
    "designation": "SR TE/1/MAQ ",
    "phone": 8310138392
  },
  {
    "name": "Guruprasada S Shetty",
    "designation": "TE/MAQ",
    "phone": 8310138359
  },
  {
    "name": "Raghavendra Devadiga",
    "designation": "TE/MAQ",
    "phone": 8310138397
  },
  {
    "name": "Rizwan Ahmed Siddiqui",
    "designation": "ASC/KW",
    "phone": 9686656206
  },
  {
    "name": "Naresh Sawant",
    "designation": "IPF/KW",
    "phone": 9686656140
  },
  {
    "name": "S K Shrivastav",
    "designation": "SIPF/KAWR",
    "phone": 9686037490
  },
  {
    "name": "Mallikarjun Koli",
    "designation": "IPF/KAWR",
    "phone": 9686683856
  },
  {
    "name": "Santosh D Naik",
    "designation": "RPF/Veh.driver/KAWR",
    "phone": 7483804194
  },
  {
    "name": "RPF Office/KAWR",
    "designation": "RPF",
    "phone": 9686656144
  },
  {
    "name": "Sahaya Justin",
    "designation": "ASIP/BTJL",
    "phone": 9686656141
  },
  {
    "name": "Uday Devadiga",
    "designation": "CONST/BTJL",
    "phone": 9686656142
  },
  {
    "name": "P V Madhu Sudan",
    "designation": "IPF/UD",
    "phone": 9686656145
  },
  {
    "name": "RPF Office UD",
    "designation": "RPF",
    "phone": 9686656146
  },
  {
    "name": "Sudhir Shetty",
    "designation": "ASIP/UD",
    "phone": 9606448419
  },
  {
    "name": "Renu Nair",
    "designation": "APO/KW",
    "phone": 9686656208, isHOD: true
  },
  {
    "name": "Gajendra Talekar",
    "designation": "PI/KAWR",
    "phone": 9686656130
  },
  {
    "name": "Arunkhosh D",
    "designation": "CPI/BLP",
    "phone": 9686656131
  },
  {
    "name": "M S Patil",
    "designation": "CPI/KW",
    "phone": 8431404596
  },
  {
    "name": "Girish Jumnalkar",
    "designation": "SA/IT/KAWR",
    "phone": 9686683854
  },
  {
    "name": "Nagaraja K Poojary",
    "designation": "SP/KAWR",
    "phone": 9686683857
  },
  {
    "name": "Ganesh I Rao",
    "designation": "SPT1/KT",
    "phone": 9686683855
  },
  {
    "name": "Prashant Naik",
    "designation": "SP/BTJL",
    "phone": 9686683858
  },
  {
    "name": "Ganesh Naik",
    "designation": "SPIT/UD",
    "phone": 9686683853
  },
  {
    "name": "Kullal B Kulal",
    "designation": "SR SP/SL ",
    "phone": 9686683852
  },
  {
    "name": "Babu S Khedle",
    "designation": "REE/KAWR",
    "phone": 9686656202, isHOD: true
  },
  {
    "name": "A N Bandekar",
    "designation": "SSE/EL/HQ/KW",
    "phone": 9686656180
  },
  {
    "name": "Eknath Ankolekar",
    "designation": "SSE/EL/KW",
    "phone": 9686656182
  },
  {
    "name": "M N Naraynan",
    "designation": "SSE/EL/UD",
    "phone": 9686656184
  },
  {
    "name": "John Sontakke",
    "designation": "SSE/EL/BTJL",
    "phone": 9686656183
  },
  {
    "name": "Nagaraj Sankolli",
    "designation": "SSE/RE/KAWR @Bangalore ",
    "phone": 9606448415
  },
  {
    "name": "Prashant Kamble",
    "designation": "SSE/RE/KAWR",
    "phone": 8088417849
  },
  {
    "name": "S B Naik",
    "designation": "SSE/TRD/KAWR",
    "phone": 8310137647
  },
  {
    "name": "Santosh Acharya",
    "designation": "SSE/HQ/KW",
    "phone": 9686656187
  },
  {
    "name": "Sachin Gouda",
    "designation": "SSE/OHE/KAWR",
    "phone": 8088417851
  },
  {
    "name": "Prashanth Adiga",
    "designation": "SSE/W/KAWR",
    "phone": 9686695917
  },
  {
    "name": "Sandesha",
    "designation": "SSE/OHE/MRDW",
    "phone": 8310137937
  },
  {
    "name": "Madhava",
    "designation": "SSE/EL/SL",
    "phone": 8310137648
  },
  {
    "name": "Soorya Kumar",
    "designation": "SSE/OHE/UD",
    "phone": 8088417846
  },
  {
    "name": "Rajkumar",
    "designation": "SSE/PSI/UD",
    "phone": 8088417852
  },
  {
    "name": "Kumar Swamy",
    "designation": "SSE/PSI//UD",
    "phone": 9686656181
  },
  {
    "name": "Likhitha H",
    "designation": "JE/EL/II/KAWR",
    "phone": 8310137651
  },
  {
    "name": "Yashavant Majalikar",
    "designation": "JEEII/KW ",
    "phone": 9686656185
  },
  {
    "name": " Nagarajan",
    "designation": "JE/TVCR/KAWR @Channai",
    "phone": 8088417854
  },
  {
    "name": "Ramesh H",
    "designation": "JE/OHE/MRDW",
    "phone": 9019921260
  },
  {
    "name": "Sandesh Shet",
    "designation": "JE/PSI/KW",
    "phone": 8088417850
  },
  {
    "name": "Rohit Pachorkar",
    "designation": "JEE/III/PSI & GS/KAWR ",
    "phone": 9364012873
  },
  {
    "name": "Ramesh Hadpad",
    "designation": "JE/OHE/MRDW",
    "phone": 8310137829
  },
  {
    "name": "Nagaraj Shrigiri",
    "designation": "TEC/III/UD",
    "phone": 8088417848
  },
  {
    "name": "Sebstian Prabhakar",
    "designation": "JEE/PSI/SL",
    "phone": 8088417847
  },
  {
    "name": "Mukta B Naik",
    "designation": "OS/EL/KAWR",
    "phone": 8310137652
  },
  {
    "name": "Purushotham Varekar",
    "designation": "SR CL/KAWR ",
    "phone": 8310137661
  },
  {
    "name": " Raghunatha M",
    "designation": "SR CL/UD",
    "phone": 8310137662
  },
  {
    "name": "Prashanth Shetty",
    "designation": "OS/UD",
    "phone": 8310137670
  },
  {
    "name": "Rashid Shaikh",
    "designation": "TEC/LI/KAWR",
    "phone": 8310137745
  },
  {
    "name": "Ramesh Devadiga",
    "designation": "TEC/LIII/KAWR",
    "phone": 8310137674
  },
  {
    "name": "Srinivas B",
    "designation": "TEC/LIII/KAWR",
    "phone": 8310137686
  },
  {
    "name": "Nikhil B",
    "designation": "TEC/LIII/KAWR",
    "phone": 8310137689
  },
  {
    "name": "Amol Nandeshwar",
    "designation": "TEC/LIII/KAWR",
    "phone": 8310137690
  },
  {
    "name": "Adinath",
    "designation": "TEC/LIII/KAWR",
    "phone": 7619122001
  },
  {
    "name": "T C Gotakhandki",
    "designation": "MCM/KAWR",
    "phone": 7619122002
  },
  {
    "name": "Suhas Nerurkar",
    "designation": "TECLII/KAWR",
    "phone": 9686656189
  },
  {
    "name": "Satish D Nagekar",
    "designation": "TECLII/KAWR",
    "phone": 7619122003
  },
  {
    "name": "Prashant Naik",
    "designation": "TECLII/KAWR",
    "phone": 7619122004
  },
  {
    "name": "B Joseph Paul",
    "designation": "MCM/KAWR",
    "phone": 7619122005
  },
  {
    "name": "L Rai",
    "designation": "TECLI/KAWR",
    "phone": 7619122006
  },
  {
    "name": "Ramakanth S Naik",
    "designation": "TECLI/KAWR",
    "phone": 7619122007
  },
  {
    "name": "A A Mascarenhas",
    "designation": "TECLI/KAWR",
    "phone": 7619122008
  },
  {
    "name": "Sudhakara H",
    "designation": "TECLI/KAWR",
    "phone": 7619122009
  },
  {
    "name": "Surendra",
    "designation": "TECLI/KAWR",
    "phone": 7619122010
  },
  {
    "name": "Seetharama",
    "designation": "TECLI/BTJL",
    "phone": 7619122011
  },
  {
    "name": "T P Palekar",
    "designation": "TECLI/BTJL",
    "phone": 7619122012
  },
  {
    "name": "Sailesh S Shanbhag",
    "designation": "TECLI/BTJL",
    "phone": 7619122013
  },
  {
    "name": "Prasanna P S",
    "designation": "TECLI/UD",
    "phone": 7619122014
  },
  {
    "name": "L Suresh Kumar",
    "designation": "TECLI/UD",
    "phone": 7619122015
  },
  {
    "name": "Pravin Rajput",
    "designation": "TEC/LIII/UD",
    "phone": 8310137703
  },
  {
    "name": "Sanjay Magadum",
    "designation": "TEC/LIII/UD",
    "phone": 8310137728
  },
  {
    "name": "Shaik Riyaz Daulat",
    "designation": "TEC/LIII/UD",
    "phone": 8310137735
  },
  {
    "name": "Sandip Deshmukh",
    "designation": "TEC/LIII/UD",
    "phone": 8310137741
  },
  {
    "name": "Kusuma Poojarthi",
    "designation": "TEC/LIII/UD",
    "phone": 8310137672
  },
  {
    "name": "Nagendra S",
    "designation": "TEC/LIII/UD",
    "phone": 8310137701
  },
  {
    "name": "Omprakash",
    "designation": "TECLI/SL",
    "phone": 7619122016
  },
  {
    "name": "Sudhir",
    "designation": "TECLI/SL",
    "phone": 7619122017
  },
  {
    "name": "Nagendra",
    "designation": "VDRI/IV/KAWR",
    "phone": 8310137656
  },
  {
    "name": "Ashwini B G",
    "designation": "OHKH/UD",
    "phone": 8310137764
  },
  {
    "name": "Sujan Mazumder",
    "designation": "KH/EL/MAO",
    "phone": 8310137795
  },
  {
    "name": "Sathiyamoorthy",
    "designation": "KH/EL/KAWR",
    "phone": 8310137675
  },
  {
    "name": "Ratna Naik",
    "designation": "KH/EL/KAWR",
    "phone": 8310137789
  },
  {
    "name": "Pramod kumar Shetty",
    "designation": "MCM/UD",
    "phone": 9364012871
  },
  {
    "name": "Ravindra Ganiger",
    "designation": "TECH/III/PSI & GS/KAWR ",
    "phone": 9364012872
  },
  {
    "name": "Sunil Athavale",
    "designation": "TECH/III/KAWR",
    "phone": 9364012874
  },
  {
    "name": "Pavan Dupare",
    "designation": "TECH/III/KAWR",
    "phone": 9364012875
  },
  {
    "name": "Ramesh Rathod",
    "designation": "TECH/III/KAWR",
    "phone": 9364012876
  },
  {
    "name": "Harish V Telagar",
    "designation": "TECH/III/KAWR",
    "phone": 9364012877
  },
  {
    "name": "Nikhil Pagade",
    "designation": "TECH/III/KAWR",
    "phone": 9364012878
  },
  {
    "name": "Shivanand Swami",
    "designation": "TECH/III/OHE/MRDW",
    "phone": 9364012880
  },
  {
    "name": "Rishikant Mali",
    "designation": "TECH/III/OHE/MRDW",
    "phone": 9364012881
  },
  {
    "name": "Ashish Hatzade",
    "designation": "TECH/III/OHE/MRDW",
    "phone": 9364012882
  },
  {
    "name": "Prashant Wadekar",
    "designation": "TECH/III/OHE/MRDW",
    "phone": 9364012883
  },
  {
    "name": "Madevi M Gond",
    "designation": "TECH/III/PSI & GS/MRDW ",
    "phone": 9364012884
  },
  {
    "name": "Niteen Kambale",
    "designation": "TECH/III/OHE/MRDW",
    "phone": 8310137852
  },
  {
    "name": "Avinash Wahane",
    "designation": "TECH/III/OHE/MRDW",
    "phone": 8310137838
  },
  {
    "name": "Dr Steven George",
    "designation": "Dy CMO/UD",
    "phone": 9686656164
  },
  {
    "name": "Uttam D Jagtap",
    "designation": "HI/KAWR",
    "phone": 9686656115
  },
  {
    "name": "Bharathi N Nayak",
    "designation": "SR NUR/VEN ",
    "phone": 9686656116
  },
  {
    "name": "Savitha T Durgekar",
    "designation": "SR NUR/KW ",
    "phone": 9686656117
  },
  {
    "name": "Ekanath Naik",
    "designation": "MPHW/UD",
    "phone": 9686656118
  },
  {
    "name": "Manjunath E Naik",
    "designation": "MPHW/UD",
    "phone": 9686656119
  },
  {
    "name": "Puttu Chamaraj S",
    "designation": "MPHW/KW",
    "phone": 9686656121
  },
  {
    "name": "Ganapati Devadiga",
    "designation": "MPHW/KW",
    "phone": 9686656122
  },
  {
    "name": "Rajaram M Madiwal",
    "designation": "MPHW/MAO",
    "phone": 9686656123
  },
  {
    "name": "Rahul Baadkar",
    "designation": "Sr RSTE/KAWR",
    "phone": 9686656207, isHOD: true
  },
  {
    "name": "Sudharsan Reddy",
    "designation": "SSTE/UD",
    "phone": 9686656217
  },
  {
    "name": "Jairam Moger",
    "designation": "SSE/S&T/KW",
    "phone": 9686683931
  },
  {
    "name": "Murugesan R",
    "designation": "SSE/TRC/KW",
    "phone": 9686683932
  },
  {
    "name": "Bhaskara",
    "designation": "SSE/S&T/TA/KW",
    "phone": 9686683933
  },
  {
    "name": "Vinod Thomas",
    "designation": "SSE/S&T/BTJL",
    "phone": 9686683934
  },
  {
    "name": "Harish Shetty",
    "designation": "SSE/S&T/UD",
    "phone": 9686683935
  },
  {
    "name": "Harish S Jumnalkar",
    "designation": "SSE/S&T/P&W/KW",
    "phone": 9686683937
  },
  {
    "name": "Harish Tivarekar",
    "designation": "JE/S&T/RM/KW",
    "phone": 9686683936
  },
  {
    "name": "Sujata Gunagi",
    "designation": "OS/S&T/KAWR",
    "phone": 8310137876
  },
  {
    "name": "Venu Ganesh Bhat",
    "designation": "JE/S&T/KT",
    "phone": 9686683938
  },
  {
    "name": "Narasinha Naik",
    "designation": "JE/S&T/RM/MRDW",
    "phone": 9686683939
  },
  {
    "name": "Manish B Shetty",
    "designation": "JE/S&T/RM/UD",
    "phone": 9686683943
  },
  {
    "name": "S Manivannan Krishnan",
    "designation": "SSE/S&T/LR/UD",
    "phone": 9686676510
  },
  {
    "name": "Kalpesh Salaskar",
    "designation": "JE/S&T/KUDA",
    "phone": 9686683942
  },
  {
    "name": "M K Sureshan",
    "designation": "SSE/S&T/MAO",
    "phone": 9686683944
  },
  {
    "name": "Savitri Achari",
    "designation": "JE/S&T/TR/KW",
    "phone": 9686683930
  },
  {
    "name": "Dinesh Shenve",
    "designation": "SSE/S&T/HR/KAWR",
    "phone": 9686688139
  },
  {
    "name": "Neelakantappa",
    "designation": "JE/S&T/HR/BTJL",
    "phone": 9686683940
  },
  {
    "name": "Prasanna B Naik",
    "designation": "JE/S&T/HR/UD",
    "phone": 9686683941
  },
  {
    "name": "Pradeep G",
    "designation": "JTA/UD",
    "phone": 9663470915
  },
  {
    "name": "Somanath Balekar",
    "designation": "ESTM/AT",
    "phone": 9686656015
  },
  {
    "name": "Ramesh Naik",
    "designation": "MCM/KAWR",
    "phone": 9686683945
  },
  {
    "name": "Lavu Kankonkar",
    "designation": "ESTM/KAWR",
    "phone": 9686656080
  },
  {
    "name": "Kishor Naik",
    "designation": "ESTM/II/TRC/KAWR",
    "phone": 7619122028
  },
  {
    "name": "Shashikant Talekar",
    "designation": "ESTM/II/TRC/KAWR",
    "phone": 7619122018
  },
  {
    "name": "Deepak Naik",
    "designation": "ESTM/III/TRC/KAWR",
    "phone": 7619122019
  },
  {
    "name": "Krishna Kankonkar",
    "designation": "ESTM-III/KAWR",
    "phone": 7619122026
  },
  {
    "name": "Santosh Madival",
    "designation": "ESTM/RM/HAA",
    "phone": 7619122020
  },
  {
    "name": "Raghavendra Naik",
    "designation": "ESTM III/RM/HAA ",
    "phone": 9686656775
  },
  {
    "name": "Nagesh Naik",
    "designation": "ESTM/RM/ANKL",
    "phone": 9686683946
  },
  {
    "name": "Gajanan K Naik",
    "designation": "MCM/ESTM/RM/GOK",
    "phone": 9686685548
  },
  {
    "name": "Belchar Lopes",
    "designation": "ESTM/RM/MRJN",
    "phone": 9663470867
  },
  {
    "name": "G S Kumar",
    "designation": "MCM/ESTM/RM/KT",
    "phone": 9686685549
  },
  {
    "name": "Sagar Gajbhiye",
    "designation": "ESTM/III/RM/KT",
    "phone": 7619122029
  },
  {
    "name": "Nithina Naik",
    "designation": "ESTM/RM/HNA",
    "phone": 9686687539
  },
  {
    "name": "Shivanand Gowda",
    "designation": "ESTM/RM/MANK",
    "phone": 9686687540
  },
  {
    "name": " Nagaraj  Billava ",
    "designation": "ESTM/II/HR/MANK",
    "phone": 7619122023
  },
  {
    "name": "Rajesh Fernandes",
    "designation": "ESTM III/RM/HAA ",
    "phone": 7619122022
  },
  {
    "name": "Niranjan Shetty",
    "designation": "ESTM/RM/MRDW",
    "phone": 9686688134
  },
  {
    "name": "Pandurang Naik",
    "designation": "MCM/ESTM/RM/BTJL",
    "phone": 9686683947
  },
  {
    "name": "Girish Devadiga",
    "designation": "ESTM/RM/SHMI",
    "phone": 9686688136
  },
  {
    "name": "Raveesh Poojary",
    "designation": "ESTM/RM/SEN",
    "phone": 9686683948
  },
  {
    "name": "Surendra Shetty",
    "designation": "ESTM/III/KUDA",
    "phone": 7619122024
  },
  {
    "name": "Suresh S",
    "designation": "ESTM-III/HR/SEN",
    "phone": 7619122030
  },
  {
    "name": "Arun Nayak",
    "designation": "ESTM/RM/KUDA",
    "phone": 9686688142
  },
  {
    "name": "Vasant Poojary",
    "designation": "ESTM/RM/BKJ",
    "phone": 9686688145
  },
  {
    "name": "Sridharan S",
    "designation": "MCM/ESTM/RM/UD",
    "phone": 9686688157
  },
  {
    "name": "Purushottam Kumbalkar",
    "designation": "ESTM-III/UD",
    "phone": 7619122031
  },
  {
    "name": " S Vasu",
    "designation": "JR.OA/S&T/UD",
    "phone": 9686656212
  },
  {
    "name": "C R Sujith kumar",
    "designation": "MCM/ESTM/RM/PDD",
    "phone": 9686688438
  },
  {
    "name": "Adesh Hedge",
    "designation": "ESTM/II/HR/PDD",
    "phone": 7619122021
  },
  {
    "name": "Roopesh S",
    "designation": "MCM/ESTM/RM/NAND",
    "phone": 9686688730
  },
  {
    "name": "P A Chandrashekar",
    "designation": "MCMESTM/RM/MULK",
    "phone": 9686683950
  },
  {
    "name": "Praveen Crasta",
    "designation": "MCM/ESTM/RM/INJ",
    "phone": 9686688728
  },
  {
    "name": "M H Kadam",
    "designation": "MCM/ESTM/LR/UD",
    "phone": 8310137827
  },
  {
    "name": "Sudesh kumar Rao",
    "designation": "MCM/ESTM/RM/TOK",
    "phone": 9686683949
  },
  {
    "name": "B P Naveen Chandra",
    "designation": "MCM/ESTM/RM/SL",
    "phone": 7619122025
  },
  {
    "name": "Ramakrishna",
    "designation": "ESTM-III/RM/TOK",
    "phone": 7619122032
  },
  {
    "name": "Akhilesh J Naik",
    "designation": "ESTM-II/RM/TOK",
    "phone": 7619122033
  },
  {
    "name": "Sunil N D'souza",
    "designation": "MCMESTM/TP/MAQ",
    "phone": 9686683951
  },
  {
    "name": "Asnoti",
    "designation": "AT Station FCT Phone ",
    "phone": 9019921261
  },
  {
    "name": "Harvada",
    "designation": "HAA Station FCT Phone ",
    "phone": 9019921262
  },
  {
    "name": "Ankola",
    "designation": "ANKL Station FCT Phone ",
    "phone": 9019921263
  },
  {
    "name": "Gokarna Road",
    "designation": "GOK Station FCT Phone ",
    "phone": 9019921258
  },
  {
    "name": "Mirjan",
    "designation": "MRJN Station FCT Phone ",
    "phone": 9019921255
  },
  {
    "name": "Honnavar",
    "designation": "HNA Station FCT Phone ",
    "phone": 8088417855
  },
  {
    "name": "Murdeshwar",
    "designation": "MRDW Station FCT Phone ",
    "phone": 8310137805
  },
  {
    "name": "Mookambika Road Bydoor",
    "designation": "BYNR Station FCT Phone ",
    "phone": 8310137887
  },
  {
    "name": "Shiroor",
    "designation": "SHMI Station FCT Phone ",
    "phone": 9686037485
  },
  {
    "name": "Bijoor",
    "designation": "BIJR Station FCT Phone ",
    "phone": 9606448416
  },
  {
    "name": "Senapura",
    "designation": "SEN Station FCT Phone ",
    "phone": 8310137825
  },
  {
    "name": "Kundapura",
    "designation": "KUDA Station FCT Phone ",
    "phone": 8310137826
  },
  {
    "name": "Innanje",
    "designation": "INJ Station FCT Phone ",
    "phone": 9019921264
  },
  {
    "name": "Padubidri",
    "designation": "PDD Station FCT Phone ",
    "phone": 9686683851
  },
  {
    "name": "Nandikur",
    "designation": "NAND Station FCT Phone ",
    "phone": 8431404601
  },
  {
    "name": "Mulki",
    "designation": "MULK Station FCT Phone ",
    "phone": 8431404602
  },
  {
    "name": "Thokur",
    "designation": "TOK Station FCT Phone ",
    "phone": 9019921265
  },
  {
    "name": "Girish M R",
    "designation": "GM/KRIDL/Bangalore",
    "phone": 7483804192
  },
  {
    "name": "B S Nadage",
    "designation": "Sr.REN/KW",
    "phone": 9686656203, isHOD: true
  },
  {
    "name": "Vijaykumar K",
    "designation": "SEN/SW/KAWR",
    "phone": 9686656213
  },
  {
    "name": "Gopalakrishanan M V",
    "designation": "SEN/UD",
    "phone": 9686656214
  },
  {
    "name": "G Shashidhara",
    "designation": "SEN/W/MAO",
    "phone": 9686045475
  },
  {
    "name": "Sukumar Shetty",
    "designation": "AEN/PROJ/Gadarwada",
    "phone": 9632254505
  },
  {
    "name": "Vinayak Hegade",
    "designation": "SSE/HQ/KAWR",
    "phone": 7624961407
  },
  {
    "name": "Sheshagiri kanduli",
    "designation": "SSE/Pway/KAWR",
    "phone": 9686656250
  },
  {
    "name": "G Kumaraswamy",
    "designation": "SSE/WK/KAWR",
    "phone": 9686656254
  },
  {
    "name": "Rajesh Shetty",
    "designation": "SSE/W/MRDW",
    "phone": 9686656249
  },
  {
    "name": "Mohan",
    "designation": "SSE/PWAY/UD",
    "phone": 9686656252
  },
  {
    "name": "Raju Chandran",
    "designation": "SSE/PWAY/BTJL",
    "phone": 9686656253
  },
  {
    "name": "Veereshwarya",
    "designation": "SSE/Pway/KUDA",
    "phone": 7624961358
  },
  {
    "name": "B M Venkatesh",
    "designation": "SSE/WK/UD",
    "phone": 9686656261
  },
  {
    "name": "Shekarappa Jadamali",
    "designation": "SSE/MMG/UD",
    "phone": 9686656267
  },
  {
    "name": "Gurudev Gavas",
    "designation": "SSE/PWAY/VEN",
    "phone": 9686656257
  },
  {
    "name": "Mahesh G Hegade",
    "designation": "SSE/MMG/KAWR",
    "phone": 9686656259
  },
  {
    "name": "D.V Subbarao",
    "designation": "SSE/USFD/BTJL",
    "phone": 9686656255
  },
  {
    "name": "K Prabhakar Shetty",
    "designation": "SRSV/KAWR",
    "phone": 9686656269
  },
  {
    "name": "Ashok M Rathod",
    "designation": "SSE/LAND/UD",
    "phone": 9686656283
  },
  {
    "name": "Lakshminarayana M Hegde",
    "designation": "SSE/Pway/CTR/ANKL",
    "phone": 9686656258
  },
  {
    "name": "Anil Naik",
    "designation": "JE/Pway/SL",
    "phone": 9686656263
  },
  {
    "name": "H S Sunil",
    "designation": "JE/Pway/BTJL",
    "phone": 9686656290
  },
  {
    "name": "Gosavi Deepak Govind",
    "designation": "JE/DD/KW",
    "phone": 9686656275
  },
  {
    "name": "Sateesh Gaonkar",
    "designation": "JE/PWAY/KW",
    "phone": 9686656270
  },
  {
    "name": "J S Hegde",
    "designation": "JE/USFDKAWR",
    "phone": 9686656251
  },
  {
    "name": "Shivanand V Karseri",
    "designation": "JE/W/MAO",
    "phone": 9686656272
  },
  {
    "name": "Devanand D Naik",
    "designation": "JE/LAND/KW",
    "phone": 9686656262
  },
  {
    "name": "Pallavi M Amadallikar",
    "designation": "JE/CI/KW",
    "phone": 9686656265
  },
  {
    "name": "Ravikumar H B",
    "designation": "JE/HQ/KW",
    "phone": 9686656271
  },
  {
    "name": "Pankaj Kalli",
    "designation": "JE/PWAY/KT",
    "phone": 9686656280
  },
  {
    "name": "Dinesh M Naik",
    "designation": "JE/Pway/MRDW",
    "phone": 9686656256
  },
  {
    "name": "V T Pios",
    "designation": "JE/Pway/SHMI",
    "phone": 9686656266
  },
  {
    "name": "Veereshwariha G",
    "designation": "SSE/Pway/KUDA",
    "phone": 9686656284
  },
  {
    "name": "A C Sachindra Babu",
    "designation": "JE/USFD/UD",
    "phone": 9686656166
  },
  {
    "name": "Shivaprasad",
    "designation": "JE/USFD/UD",
    "phone": 7619263088
  },
  {
    "name": "Bhikaro Gaonkar",
    "designation": "APWS/MAO",
    "phone": 9686656268
  },
  {
    "name": "Ramesh G Mayekar",
    "designation": "ASUP/PW/THVM",
    "phone": 9686656277
  },
  {
    "name": "Mahesh R devadiga",
    "designation": "APWS/KUDA",
    "phone": 9686656281
  },
  {
    "name": "Abdul R K Phatan",
    "designation": "APWS/SL",
    "phone": 9686656285
  },
  {
    "name": "Digmbar D Bhujbal",
    "designation": "PWS/KW",
    "phone": 9686656286
  },
  {
    "name": "Vishnu Appa Ghatwal",
    "designation": "PWS/VEN",
    "phone": 9686656287
  },
  {
    "name": "Viturai P kurtikar",
    "designation": "APWS/MRDW",
    "phone": 9686656288
  },
  {
    "name": "Subhashchandra shetty",
    "designation": "PWS/BKJ",
    "phone": 9686656292
  },
  {
    "name": "Mohandas M Kadam",
    "designation": "PWS/KT",
    "phone": 9686656291
  },
  {
    "name": "Arun P",
    "designation": "PWS/SEN",
    "phone": 9686656289
  },
  {
    "name": "Kanakraj",
    "designation": "PWS/UD",
    "phone": 9686656282
  },
  {
    "name": "Hanumanth Dixit",
    "designation": "MCM/MRDW",
    "phone": 9663470758
  },
  {
    "name": "Manjunath Mukri",
    "designation": "PWS/BTJL",
    "phone": 7619122078
  },
  {
    "name": "Chakko Verghese",
    "designation": "APWS/MULK",
    "phone": 9686656293
  },
  {
    "name": "Wilson",
    "designation": "TSM1/SL",
    "phone": 7619119051
  },
  {
    "name": "Ganpati S Naik.",
    "designation": "TSM1/ANKL",
    "phone": 7619119052
  },
  {
    "name": "Dayananda Naik",
    "designation": "TSM1/LC-83",
    "phone": 7619119053
  },
  {
    "name": "Sanjeeva",
    "designation": "TSM1/SEN",
    "phone": 7619119054
  },
  {
    "name": "Yogesh N Poojary",
    "designation": "TSM2/KUDA",
    "phone": 7619119055
  },
  {
    "name": "Ganapati Mukri",
    "designation": "TSM1/HNA/LC-64",
    "phone": 7619119056
  },
  {
    "name": "Gananpati T Gowda",
    "designation": "TSM1/HNA",
    "phone": 7619119057
  },
  {
    "name": "Udaya Sairu Naik",
    "designation": "TSM1/GOK",
    "phone": 7619119058
  },
  {
    "name": "Nilesh B Naik",
    "designation": "APWS/HAA",
    "phone": 7619119059
  },
  {
    "name": "Shanmukha G Naik",
    "designation": "TSM1/HAA",
    "phone": 7619119060
  },
  {
    "name": "Umesh M Gowda",
    "designation": "TSM1/KT",
    "phone": 7619119061
  },
  {
    "name": "Mahesh T Naik",
    "designation": "TSM1/KT",
    "phone": 7619119062
  },
  {
    "name": "Uday P Naik",
    "designation": "TSM1/MRDW",
    "phone": 7619119063
  },
  {
    "name": "Mohan Hanumanth Naik",
    "designation": "TSM1/MRDW",
    "phone": 7619119064
  },
  {
    "name": "Harishchandra L Govekar",
    "designation": "TSM1/KAWR",
    "phone": 7619119065
  },
  {
    "name": "Ullas M Naik",
    "designation": "TSM1/KT",
    "phone": 7619119066
  },
  {
    "name": "Narendra N Naik",
    "designation": "TSM/SHMI",
    "phone": 7619119067
  },
  {
    "name": "Krishna R Naik",
    "designation": "TSM1/HNA",
    "phone": 7619119068
  },
  {
    "name": "Ashok T Padti",
    "designation": "TSM1/HAA",
    "phone": 7619119070
  },
  {
    "name": "Francis G Dias",
    "designation": "TSM1/KAWR",
    "phone": 7619119071
  },
  {
    "name": "Naik Rajakumara G",
    "designation": "TSM1/KT",
    "phone": 7619119072
  },
  {
    "name": "Krishna Marakala",
    "designation": "TSM1/BKJ",
    "phone": 7619119073
  },
  {
    "name": "Krishna K Gonda",
    "designation": "TSM1/MRDW",
    "phone": 7619119074
  },
  {
    "name": "Albert D Souza",
    "designation": "TSM1/LC-80",
    "phone": 7619119075
  },
  {
    "name": "Nagaraj G Naik",
    "designation": "TSM1/MANK",
    "phone": 7619119077
  },
  {
    "name": "Ramanand J Naik",
    "designation": "TSM1/MRDW",
    "phone": 7619119078
  },
  {
    "name": "Suresh Sherigar",
    "designation": "TSM1/KUDA",
    "phone": 7619119080
  },
  {
    "name": "Raghavendra",
    "designation": "TSM1/KUDA",
    "phone": 7619119081
  },
  {
    "name": "Krishna G Naik",
    "designation": "TSM1/MANK",
    "phone": 7619119082
  },
  {
    "name": "Premanatha",
    "designation": "TSM1/MULK",
    "phone": 7619119083
  },
  {
    "name": "Sharad G Parwar",
    "designation": "TSM1/THVM",
    "phone": 7619119084
  },
  {
    "name": "Shankar T Naik",
    "designation": "TSM1/KUDA",
    "phone": 7619119085
  },
  {
    "name": "Madev K Gonda",
    "designation": "TSM1/BIJR",
    "phone": 7619119086
  },
  {
    "name": "Y Laxmana K Koraga",
    "designation": "TSM1/SHMI",
    "phone": 7619119087
  },
  {
    "name": "Gajanan D Gouda",
    "designation": "TSM1/MRDW",
    "phone": 7619119088
  },
  {
    "name": "Sunilkumar A Poojary",
    "designation": "TSM1/LC-82",
    "phone": 7619119089
  },
  {
    "name": "M Shekhara Moolya",
    "designation": "TSM1/BKJ",
    "phone": 7619119090
  },
  {
    "name": "Rama K Gonda",
    "designation": "TSM1/BTJL",
    "phone": 7619119091
  },
  {
    "name": "Arvind R Laxmeshwar",
    "designation": "TSM1/ANKL",
    "phone": 7619119092
  },
  {
    "name": "Ramachandra Sommappa",
    "designation": "TSM1/NAND",
    "phone": 7619119093
  },
  {
    "name": "G J Mukri",
    "designation": "TSM1/SEN",
    "phone": 7619119094
  },
  {
    "name": "Krishna Naik",
    "designation": "TSM1/KUDA",
    "phone": 7619119095
  },
  {
    "name": "Rajesh Harijan",
    "designation": "TSM1/MULK",
    "phone": 7619119097
  },
  {
    "name": "Narayan D Naik",
    "designation": "TSM1/PDD",
    "phone": 7619119098
  },
  {
    "name": "Ramanand J Naik",
    "designation": "TSM1/MRDW",
    "phone": 7619119099
  },
  {
    "name": "Krishna Naik",
    "designation": "APWS/HNA",
    "phone": 7619119002
  },
  {
    "name": "RMV-5406 KAWR",
    "designation": "RMV-5406",
    "phone": 9686656216
  },
  {
    "name": "RMV",
    "designation": "RMV/BTJL",
    "phone": 9686656273
  },
  {
    "name": "RMV",
    "designation": "RMV/UD",
    "phone": 9686656274
  },
  {
    "name": "SL-Mech dept.",
    "designation": "SL-Mech",
    "phone": 7619122034
  },
  {
    "name": "Shrihari",
    "designation": "TOK/Yard",
    "phone": 7619122035
  },
  {
    "name": "Jagdishwar K Bhatt",
    "designation": "SSE/ME/MAO",
    "phone": 9686683860
  },
  {
    "name": "Mohamad Arif",
    "designation": "SSE/ME/TOK",
    "phone": 9686683862
  },
  {
    "name": "K Varghese Eldos",
    "designation": "SSE/ME/TOK",
    "phone": 9686683863
  },
  {
    "name": "D A Vijaykumar",
    "designation": "SSE/ME/TOK",
    "phone": 9686683925
  },
  {
    "name": "Shridhar patgar",
    "designation": "SSE/ME/TOK",
    "phone": 9686680852
  },
  {
    "name": "K Binu",
    "designation": "CLI/VEN",
    "phone": 9686699504
  },
  {
    "name": "Satish M Salian",
    "designation": "LPG/SL",
    "phone": 9686698179
  },
  {
    "name": "Ramkrishna",
    "designation": "LPG/SL",
    "phone": 9686738204
  },
  {
    "name": "Satya Narayan",
    "designation": "CREW MGR/MAO ",
    "phone": 9686736483
  },
  {
    "name": "Vijay Kumar",
    "designation": "LPP/MAO",
    "phone": 9004477874
  },
  {
    "name": "Siyaf Kovoor A",
    "designation": "LPP/MAO",
    "phone": 9004479345
  },
  {
    "name": "Dinesh P N",
    "designation": "LPG/SL",
    "phone": 9686600134
  },
  {
    "name": "Mahabala Naik",
    "designation": "CREW MGR/SL",
    "phone": 9663466157
  },
  {
    "name": "M Prakash",
    "designation": "LPG/SL",
    "phone": 9663467992
  },
  {
    "name": "Saanu Kunnoth",
    "designation": "LPP/MAO",
    "phone": 9004476729
  },
  {
    "name": "Rajprasad Shetty",
    "designation": "LPG/SL",
    "phone": 9686847303
  },
  {
    "name": "Saju M G",
    "designation": "LPG/SL",
    "phone": 9686852792
  },
  {
    "name": "Nagesha",
    "designation": "LPG/SL",
    "phone": 7624978573
  },
  {
    "name": "Raghavendra",
    "designation": "LPG/SL",
    "phone": 7624978574
  },
  {
    "name": "Bhaskar K Poojary",
    "designation": "LPG/VEN",
    "phone": 7624978576
  },
  {
    "name": "Shivanand Poojary",
    "designation": "LPG/VEN",
    "phone": 7624978577
  },
  {
    "name": "Santhosh Poojary",
    "designation": "LPS/SL",
    "phone": 7624978578
  },
  {
    "name": "Ganesh Shetty",
    "designation": "ALP/SL",
    "phone": 7624978579
  },
  {
    "name": "Subramanya Sherugara",
    "designation": "ALP/SL",
    "phone": 7624978580
  },
  {
    "name": "Vasudev Acharya",
    "designation": "ALP/SL",
    "phone": 7624978581
  },
  {
    "name": "Raghavendra H",
    "designation": "ALP/SL",
    "phone": 7624978582
  },
  {
    "name": "Kishore Bangera",
    "designation": "ALP/SL",
    "phone": 7624978583
  },
  {
    "name": "Ramesh C Naik",
    "designation": "ALP/SL",
    "phone": 7624978584
  },
  {
    "name": "Sukra Gonda",
    "designation": "ALP/SL",
    "phone": 7624978587
  },
  {
    "name": "Dinesh D Moolya",
    "designation": "ALP/SL",
    "phone": 7624978588
  },
  {
    "name": "Umesh Poojary",
    "designation": "ALP/SL",
    "phone": 7624978589
  },
  {
    "name": "Ravindra Naik",
    "designation": "ALP/SL",
    "phone": 7624978590
  },
  {
    "name": "Rajendra P Naik",
    "designation": "TECH-I/MAO",
    "phone": 8088417853
  },
  {
    "name": "Dileep Bhat",
    "designation": "Sr.RTM/MAQ",
    "phone": 9686656210, isHOD: true
  },
  {
    "name": "KAWR Control",
    "designation": "Controller",
    "phone": 9686656199
  },
  {
    "name": "K Kulshekra",
    "designation": "SR SM/TOK",
    "phone": 9686683924
  },
  {
    "name": "Rajesh Shetty",
    "designation": "SR AS/UD ",
    "phone": 9686683926
  },
  {
    "name": "K G Shalu",
    "designation": "SM/HPCT",
    "phone": 9686683927
  },
  {
    "name": "Ajith Bijoor",
    "designation": "GTM/SL",
    "phone": 9686656165
  },
  {
    "name": "Girish Naik",
    "designation": "GTM/SL",
    "phone": 9686688761
  },
  {
    "name": "Venkatesh M Naik",
    "designation": "GTM/SL",
    "phone": 9686688843
  },
  {
    "name": "Bhaskar M Naik",
    "designation": "GTM/SL",
    "phone": 9686655808
  },
  {
    "name": "Prasad Shetty",
    "designation": "GTM/SL",
    "phone": 7624978591
  },
  {
    "name": "Dayanand Poojary",
    "designation": "SGTM/SL ",
    "phone": 7624978592
  },
  {
    "name": "Ananda Sherugar",
    "designation": "SGTM/SL ",
    "phone": 7624978593
  },
  {
    "name": "Adisha Chenna",
    "designation": "GTM/SL",
    "phone": 7624978594
  },
  {
    "name": "Suresh Kumar",
    "designation": "GTM/SL",
    "phone": 7624978596
  },
  {
    "name": "Shrinivas Devadiga",
    "designation": "GTM/VEN ",
    "phone": 7624978597
  },
  {
    "name": "Asnoti",
    "designation": "AT Station CUG",
    "phone": 9686683901
  },
  {
    "name": "Karwar",
    "designation": "KAWR Station CUG",
    "phone": 9686683902
  },
  {
    "name": "Harwada",
    "designation": "HAA Station CUG",
    "phone": 9686683903
  },
  {
    "name": "Ankola",
    "designation": "ANKL Station CUG",
    "phone": 9686683904
  },
  {
    "name": "Gokarna Road",
    "designation": "GOK Station CUG",
    "phone": 9686683905
  },
  {
    "name": "Mirjan",
    "designation": "MRJN Station CUG",
    "phone": 9606932729
  },
  {
    "name": "Kumta",
    "designation": "KT Station CUG",
    "phone": 9686683906
  },
  {
    "name": "Honnavar",
    "designation": "HNA Station CUG",
    "phone": 9686683907
  },
  {
    "name": "Manki",
    "designation": "MANK Station CUG",
    "phone": 9686683908
  },
  {
    "name": "Murdeshwar",
    "designation": "MRDW Station CUG",
    "phone": 9686683910
  },
  {
    "name": "Bhatkal",
    "designation": "BTJL Station CUG",
    "phone": 9686683911
  },
  {
    "name": "Shiroor",
    "designation": "SHMI Station CUG",
    "phone": 9686683912
  },
  {
    "name": "Bijoor",
    "designation": "BIJR Station CUG",
    "phone": 9686683913
  },
  {
    "name": "Senapura",
    "designation": "SEN Station CUG",
    "phone": 9686683914
  },
  {
    "name": "Kundapura",
    "designation": "KUDA Station CUG",
    "phone": 9686683915
  },
  {
    "name": "Barkur",
    "designation": "BKJ Station CUG",
    "phone": 9686683916
  },
  {
    "name": "Udupi",
    "designation": "UD Station CUG",
    "phone": 9686683917
  },
  {
    "name": "Innanje",
    "designation": "INJ Station CUG",
    "phone": 9019921259
  },
  {
    "name": "Padubidri",
    "designation": "PDD Station CUG",
    "phone": 9686683918
  },
  {
    "name": "Mookambika Road Byndoor",
    "designation": "BYNR Station CUG",
    "phone": 9686683919
  },
  {
    "name": "Nandikur",
    "designation": "NAND Station CUG",
    "phone": 9686683920
  },
  {
    "name": "Mulki",
    "designation": "MULK Station CUG",
    "phone": 9686683921
  },
  {
    "name": "Suratkal",
    "designation": "SL Station CUG",
    "phone": 9686683922
  },
  {
    "name": "Thokur",
    "designation": "TOK Station CUG",
    "phone": 9686683923
  },
  {
    "name": "S D Bapat",
    "designation": "RRM/RN",
    "phone": 9004447008, isHOD: true
  },
  {
    "name": "Neha Toraskar",
    "designation": "PS/RRM",
    "phone": 9004474501
  },
  {
    "name": "S G Kadam",
    "designation": "Driver/AEN",
    "phone": 9004474791
  },
  {
    "name": "S G Shembekar",
    "designation": "Driver/RME",
    "phone": 9004474795
  },
  {
    "name": "B P Manorkar",
    "designation": "Driver/ASTE/CHI",
    "phone": 9004474796
  },
  {
    "name": "Vikas Peje",
    "designation": "Driver/RRM",
    "phone": 9004474788
  },
  {
    "name": "Santosh Mulye",
    "designation": "Driver/AOM",
    "phone": 9004474792
  },
  {
    "name": "U A Joshi",
    "designation": "Driver/RME",
    "phone": 9004474793
  },
  {
    "name": "Raju Kalal",
    "designation": "Driver/RPF",
    "phone": 9004474882
  },
  {
    "name": "A S Sawardekar",
    "designation": "Driver/SEN/CHI",
    "phone": 9004474859
  },
  {
    "name": "Uday Shetye",
    "designation": "Driver/REE",
    "phone": 9004474797
  },
  {
    "name": "Pradeep Baliga K.",
    "designation": "RFA/RN",
    "phone": 9004474401, isHOD: true
  },
  {
    "name": "Tazeen Hazwani",
    "designation": "SO/RN",
    "phone": 9004474516
  },
  {
    "name": "A Sawant",
    "designation": "SO/RN",
    "phone": 9004474518
  },
  {
    "name": "Vineet Prabhu",
    "designation": "SR.AA/RN",
    "phone": 9004474517
  },
  {
    "name": "V V Pandere",
    "designation": "AA(SI)/RN",
    "phone": 9004474934
  },
  {
    "name": "Shailesh Ambardekar",
    "designation": "RTM-I/RN",
    "phone": 9004474410, isHOD: true
  },
  {
    "name": "Malavade",
    "designation": "CS/RN",
    "phone": 9004474577
  },
  {
    "name": "S V Mulye",
    "designation": "CS/RN",
    "phone": 9004474525
  },
  {
    "name": "Shubhada Desai",
    "designation": "CS/RN",
    "phone": 9004474530
  },
  {
    "name": "Anil Awalegaonkar",
    "designation": "CS/KUDL",
    "phone": 9004474531
  },
  {
    "name": "M D Matondkar",
    "designation": "CS/RN",
    "phone": 9004474528
  },
  {
    "name": "Dy CEE/RE/RN",
    "designation": "Dy CEE/RE/RN",
    "phone": 7400408330
  },
  {
    "name": "R P Joshi",
    "designation": "REE/RN",
    "phone": 9004474413, isHOD: true
  },
  {
    "name": "A A Ketkar",
    "designation": "AEE/RN",
    "phone": 9004474582, isHOD: true
  },
  {
    "name": "Siddhesh S Gawas",
    "designation": "AEE/RE/CHI",
    "phone": 7400408340, isHOD: true
  },
  {
    "name": "AEE/RE/RN",
    "designation": "AEE/RE/RN",
    "phone": 8668790413, isHOD: true
  },
  {
    "name": "AEE/RE/KUDAL",
    "designation": "AEE/RE/KUDAL",
    "phone": 8668793681, isHOD: true
  },
  {
    "name": "P B Patil",
    "designation": "SSE/AM/RN",
    "phone": 9004474581
  },
  {
    "name": "U S Pawar",
    "designation": "SE/EL/LM/CHI",
    "phone": 9004474584
  },
  {
    "name": "A C Shivalkar",
    "designation": "SE/EL/LM/RN",
    "phone": 9004474585
  },
  {
    "name": "U S Pawar(Stn)",
    "designation": "SE/EL/LM/CHI",
    "phone": 7400408341
  },
  {
    "name": "M D Vetoskar",
    "designation": "SSE/ELE/RN",
    "phone": 9004474591
  },
  {
    "name": "SSE/RE/RN",
    "designation": "SSE/RE/RN",
    "phone": 7410045349
  },
  {
    "name": "Escallator",
    "designation": "SSE/EL/RN",
    "phone": 7400408739
  },
  {
    "name": "P S Thitte(Travellator)",
    "designation": "SSE/EL/RN",
    "phone": 7400408740
  },
  {
    "name": "Prashant Kamble",
    "designation": "SSE/RE/CHI",
    "phone": 7400408348
  },
  {
    "name": "K S Salvi",
    "designation": "SSE/RE/RN",
    "phone": 7400408349
  },
  {
    "name": "Shreyas R Shelar",
    "designation": "SSE/ELE/Doubling",
    "phone": 7410100475
  },
  {
    "name": "Vasudev R Gawas",
    "designation": "SSE/KUDL",
    "phone": 8766751288
  },
  {
    "name": "Sanjay Belwalkar",
    "designation": "SSE/ELE",
    "phone": 8010903487
  },
  {
    "name": "S S Varekar",
    "designation": "JEE/LM/RN",
    "phone": 9004474592
  },
  {
    "name": "U K Choughule",
    "designation": "JEE/TL/RN",
    "phone": 9004474590
  },
  {
    "name": "P S Thete",
    "designation": "JE/EL/TL/RN",
    "phone": 9004474586
  },
  {
    "name": "G H Mestry",
    "designation": "JEE/KUDL",
    "phone": 9004474587
  },
  {
    "name": "D G Gune",
    "designation": "JE/LM/RN",
    "phone": 9004474588
  },
  {
    "name": "JEE/TL/RN",
    "designation": "JEE/TL/RN",
    "phone": 7400408343
  },
  {
    "name": "Nirmal Ankaikar",
    "designation": "JE/LM/CHI",
    "phone": 7400408344
  },
  {
    "name": "D G Nagothakar",
    "designation": "JE/MNI",
    "phone": 7400408345
  },
  {
    "name": "Harikrishna Alingal",
    "designation": "JEE/LM/KHED",
    "phone": 9004474593
  },
  {
    "name": "Escallator",
    "designation": "JE/EL",
    "phone": 7400408741
  },
  {
    "name": "R P Dhokate",
    "designation": "JE/MNI",
    "phone": 8010903486
  },
  {
    "name": "M G Bhatkar",
    "designation": "JE/SGR",
    "phone": 7400408342
  },
  {
    "name": "G P Bhunde",
    "designation": "MCM",
    "phone": 7410105499
  },
  {
    "name": "R B Sawant",
    "designation": "MCM",
    "phone": 7410105856
  },
  {
    "name": "G V Mulye",
    "designation": "MCM",
    "phone": 7410105941
  },
  {
    "name": "V K Nimkar",
    "designation": "MCM",
    "phone": 7410106117
  },
  {
    "name": "D D Jadhav",
    "designation": "MCM",
    "phone": 7410106278
  },
  {
    "name": "V D Mhade",
    "designation": "MCM",
    "phone": 7410107214
  },
  {
    "name": "M G Shegale",
    "designation": "MCM",
    "phone": 7410107898
  },
  {
    "name": "K B Jangam",
    "designation": "TEC/LI",
    "phone": 7410105144
  },
  {
    "name": "P P Redkar",
    "designation": "TEC/LI",
    "phone": 7410108262
  },
  {
    "name": "M E Tigade",
    "designation": "TEC/LI",
    "phone": 7410105558
  },
  {
    "name": "L S Poskar",
    "designation": "TEC/LI",
    "phone": 7410105619
  },
  {
    "name": "N S Mone",
    "designation": "TEC/LI",
    "phone": 7410106309
  },
  {
    "name": "S N Jangam",
    "designation": "TEC/LI",
    "phone": 7410107692
  },
  {
    "name": "D K Kanekar",
    "designation": "TEC/LI",
    "phone": 7410107919
  },
  {
    "name": "G K Dalvi",
    "designation": "TEC/LI",
    "phone": 7410107961
  },
  {
    "name": "S B Surve",
    "designation": "TEC/LII",
    "phone": 7410105174
  },
  {
    "name": "S N Deshmukh",
    "designation": "TEC/LII",
    "phone": 7410106590
  },
  {
    "name": "D S Tambe",
    "designation": "TEC/LII",
    "phone": 7410106760
  },
  {
    "name": "S A Redij",
    "designation": "TEC/LII",
    "phone": 7410107358
  },
  {
    "name": "T B Khandare",
    "designation": "TEC/LII",
    "phone": 7410107370
  },
  {
    "name": "M M Tirodkar",
    "designation": "TEC/LII",
    "phone": 7410107918
  },
  {
    "name": "G K Kudalkar",
    "designation": "TEC/LII",
    "phone": 7410108044
  },
  {
    "name": "S S Prabhu",
    "designation": "TEC/LII",
    "phone": 7410108073
  },
  {
    "name": "R V Pawar",
    "designation": "TEC/LIII",
    "phone": 7410105202
  },
  {
    "name": "S S Khedekar",
    "designation": "TEC/LIII",
    "phone": 7410105280
  },
  {
    "name": "P P Tatkare",
    "designation": "TEC/LIII",
    "phone": 7410105306
  },
  {
    "name": "Gamare",
    "designation": "TEC/LIII",
    "phone": 7410105443
  },
  {
    "name": "V B Gaikwad",
    "designation": "TEC/LIII",
    "phone": 7410105651
  },
  {
    "name": "A D Shinde",
    "designation": "TEC/LIII",
    "phone": 7410105830
  },
  {
    "name": "S Y Tambe",
    "designation": "TEC/LIII",
    "phone": 7410105832
  },
  {
    "name": "D V Tambitkar",
    "designation": "TEC/LIII",
    "phone": 7410105855
  },
  {
    "name": "V R Malgunkar",
    "designation": "TEC/LIII",
    "phone": 7410105883
  },
  {
    "name": "U J Panhalkar",
    "designation": "TEC/LIII",
    "phone": 7410106399
  },
  {
    "name": "K P Nevrekar",
    "designation": "TEC/LIII",
    "phone": 7410106474
  },
  {
    "name": "M K Gurav",
    "designation": "TEC/LIII",
    "phone": 7410106535
  },
  {
    "name": "Manoj M Pitre",
    "designation": "TEC/LIII",
    "phone": 7410106618
  },
  {
    "name": "Ganesh C Dongare",
    "designation": "TEC/LIIII",
    "phone": 7410106628
  },
  {
    "name": "Mandar S Juvekar",
    "designation": "TEC/LIII",
    "phone": 7410106663
  },
  {
    "name": "Y G Sawant",
    "designation": "TEC/LIII",
    "phone": 7410106717
  },
  {
    "name": "S N Gawade",
    "designation": "TEC/LIII",
    "phone": 7410106750
  },
  {
    "name": "Y G Bendre",
    "designation": "TEC/LIII",
    "phone": 7410106774
  },
  {
    "name": "A N Mahabale",
    "designation": "TEC/LIII",
    "phone": 7410106838
  },
  {
    "name": "S S Pawar",
    "designation": "TEC/LIII",
    "phone": 7410106922
  },
  {
    "name": "Z Y Dhuri",
    "designation": "TEC/LIII",
    "phone": 7410107401
  },
  {
    "name": "T L Nagothkar",
    "designation": "TEC/LIII",
    "phone": 7410107667
  },
  {
    "name": "M B Shinde",
    "designation": "TEC/LIII",
    "phone": 7410107668
  },
  {
    "name": "N K Kashalikar",
    "designation": "TEC/LIII",
    "phone": 7410107825
  },
  {
    "name": "S T Valanj",
    "designation": "TEC/LIII",
    "phone": 7410107844
  },
  {
    "name": "S K Parab",
    "designation": "TEC/LIII",
    "phone": 7410108396
  },
  {
    "name": "S.K.Parab",
    "designation": "Technician",
    "phone": 7400408346
  },
  {
    "name": "TVCR Karbude",
    "designation": "TVCR/Karbude",
    "phone": 9004474594
  },
  {
    "name": "TVCR Natuwadi",
    "designation": "TVCR/Natuwadi",
    "phone": 9004474595
  },
  {
    "name": "TVCR Parchuri",
    "designation": "TVCR/Parchuri",
    "phone": 9004474596
  },
  {
    "name": "R I Patil",
    "designation": "Sr REN/RN",
    "phone": 9004474403, isHOD: true
  },
  {
    "name": "SEN/SPL/RN",
    "designation": "SEN/SPL/RN",
    "phone": 7400408320
  },
  {
    "name": "G B Nagale",
    "designation": "SEN/KKW",
    "phone": 9004474423
  },
  {
    "name": "P N Mali",
    "designation": "SEN/RE/RN",
    "phone": 7410045323
  },
  {
    "name": "Pawan Joshi",
    "designation": "AEN/CHI",
    "phone": 9004474422
  },
  {
    "name": "K N Bidri",
    "designation": "AEN/SP/W/KHED",
    "phone": 7400408321
  },
  {
    "name": "R.A.Mokadam",
    "designation": "AEN/RN",
    "phone": 9004474608
  },
  {
    "name": "Pradip Garje",
    "designation": "AEN/KKW",
    "phone": 9004474421
  },
  {
    "name": "S R Gunje",
    "designation": "AEN/SP/W/CHI",
    "phone": 7400408322
  },
  {
    "name": "P D Garje",
    "designation": "AEN/Works",
    "phone": 7400408310
  },
  {
    "name": "B V Murkute",
    "designation": "SSE/KHED",
    "phone": 7400408311
  },
  {
    "name": "SSE/KOL",
    "designation": "SSE/KOL",
    "phone": 9004474610
  },
  {
    "name": "D S Dange",
    "designation": "SSE/MNI",
    "phone": 9004474602
  },
  {
    "name": "Prashant Kapdi",
    "designation": "SSE/W/CHI",
    "phone": 9004474614
  },
  {
    "name": "Satish Kamble",
    "designation": "SSE/CHI",
    "phone": 9004474603
  },
  {
    "name": "Sushil Gaokar",
    "designation": "SSE/SGR",
    "phone": 9004474615
  },
  {
    "name": "P S Gogate",
    "designation": "SSE/ENGG/RN",
    "phone": 9004474620
  },
  {
    "name": "Vijay Kulsange",
    "designation": "SSE/RN",
    "phone": 9004474604
  },
  {
    "name": "S D Kshirsagar",
    "designation": "SSE/SW/RN",
    "phone": 7400408312
  },
  {
    "name": "S D Thorat",
    "designation": "SSE/W/RN",
    "phone": 9004474630
  },
  {
    "name": "Shubham Chandure",
    "designation": "SSE/MMG/VEER",
    "phone": 9004474605
  },
  {
    "name": "S V Kadam",
    "designation": "SSE/VID",
    "phone": 9004474606
  },
  {
    "name": "Gurudev Gauns",
    "designation": "SSE/P/VBW",
    "phone": 9004474616
  },
  {
    "name": "P N Patil",
    "designation": "SSE/KKW",
    "phone": 9004474607
  },
  {
    "name": "S G Phadke",
    "designation": "SSE/W/KKW",
    "phone": 9004474621
  },
  {
    "name": "R T Manjarekar",
    "designation": "SSE/P/SWV",
    "phone": 9004474639
  },
  {
    "name": "Dnyandev Dange",
    "designation": "SSE/W/MNI",
    "phone": 9004474625
  },
  {
    "name": "P N Patil",
    "designation": "SSE/Works/KKW",
    "phone": 7400408325
  },
  {
    "name": "V B Shinde",
    "designation": "JE/MNI",
    "phone": 9004474624
  },
  {
    "name": "B S Thorat",
    "designation": "JE/W/MNI",
    "phone": 9004474623
  },
  {
    "name": "Shashank Sawant",
    "designation": "JE/MMG/Veer",
    "phone": 9004474622
  },
  {
    "name": "A A Salvi",
    "designation": "JE/KFD",
    "phone": 9004474611
  },
  {
    "name": "Gaurav Nerulkar",
    "designation": "JE/KHED",
    "phone": 9004474612
  },
  {
    "name": "S A Nadaf",
    "designation": "JE1/Khed",
    "phone": 7400408326
  },
  {
    "name": "R D Thorat",
    "designation": "JE/CHI",
    "phone": 9004474642
  },
  {
    "name": "R M Diwate",
    "designation": "JE/CHI",
    "phone": 9004474626
  },
  {
    "name": "P S Pendhere",
    "designation": "JE/MMG/CHI",
    "phone": 9004474613
  },
  {
    "name": "R S Petkar",
    "designation": "JE/SP/W/CHI",
    "phone": 9004474670
  },
  {
    "name": "D E Rane",
    "designation": "JE/SP/KFD",
    "phone": 7400408323
  },
  {
    "name": "S P Todankar",
    "designation": "JE/DD/RN",
    "phone": 9004474628
  },
  {
    "name": "Samadhan Gangarkar",
    "designation": "JE/MMG/RN",
    "phone": 9004474631
  },
  {
    "name": "H R Salunkhe",
    "designation": "JE/PWay/RN",
    "phone": 7400408313
  },
  {
    "name": "C M Musle",
    "designation": "JE/Land (Sr.clerk)",
    "phone": 9004474629
  },
  {
    "name": "M M Kalambate",
    "designation": "JE/SP/W",
    "phone": 9004474640
  },
  {
    "name": "R A Adisare",
    "designation": "JE/RN",
    "phone": 9004474617
  },
  {
    "name": "M P Bendre",
    "designation": "JE/I/SPW/RN",
    "phone": 9004474692
  },
  {
    "name": "JE/RN",
    "designation": "JE/RN",
    "phone": 7400408328
  },
  {
    "name": "Nitin Kamble",
    "designation": "JE/P/ADVI",
    "phone": 9004474618
  },
  {
    "name": "S B Shinde",
    "designation": "JE/VID",
    "phone": 9004474635
  },
  {
    "name": "Savita S.",
    "designation": "JE/HQ/RN",
    "phone": 9004474694
  },
  {
    "name": "R S Aundhakar",
    "designation": "JE/VID",
    "phone": 7400408327
  },
  {
    "name": "Manish Sawant",
    "designation": "JE/MMG/RAJP",
    "phone": 9004474653
  },
  {
    "name": "D B Satam",
    "designation": "JE1/VBW",
    "phone": 7400408324
  },
  {
    "name": "Shrikrishna Jadhav",
    "designation": "JE/SW/KKW",
    "phone": 9004474651
  },
  {
    "name": "Pankaj Kalli",
    "designation": "JE/PWAY/KKW",
    "phone": 9004474619
  },
  {
    "name": "Vinod Chavan",
    "designation": "JE/MMG/KUDL",
    "phone": 9004474637
  },
  {
    "name": "R M Diwate",
    "designation": "JE/DL/MNI",
    "phone": 7410103329
  },
  {
    "name": "A S Dhumal",
    "designation": "JE/SPL/MNI",
    "phone": 7400408318
  },
  {
    "name": "P S Deogharkar",
    "designation": "JE/SPL/MNI",
    "phone": 7400408319
  },
  {
    "name": "P M Deshmukh",
    "designation": "JE/TRD/MNI",
    "phone": 9004474609
  },
  {
    "name": "M K Tamboli",
    "designation": "PWS/KOL",
    "phone": 9004474641
  },
  {
    "name": "R D Thatre",
    "designation": "PWS/KOL",
    "phone": 9004474663
  },
  {
    "name": "N R Shinde",
    "designation": "PWS/VEER",
    "phone": 9004474645
  },
  {
    "name": "S R Gandhi",
    "designation": "PWS/KHED",
    "phone": 9004474646
  },
  {
    "name": "J K Patil",
    "designation": "PWS/CHI",
    "phone": 9004474647
  },
  {
    "name": "D K Jadhav",
    "designation": "PWS/SVX",
    "phone": 9004474659
  },
  {
    "name": "U K Sakpal",
    "designation": "PWS/SGR",
    "phone": 9004474648
  },
  {
    "name": "K E Shimpi",
    "designation": "PWS/RN",
    "phone": 9004474657
  },
  {
    "name": "P P Kinare",
    "designation": "PWS/RN",
    "phone": 9004474658
  },
  {
    "name": "A Y Nimkar",
    "designation": "PWS/SP/RN",
    "phone": 9004474652
  },
  {
    "name": "R B Patil",
    "designation": "PWS/VID",
    "phone": 9004474660
  },
  {
    "name": "A B Rawool",
    "designation": "PWS/SNDD",
    "phone": 9004474656
  },
  {
    "name": "P S Tawade",
    "designation": "PWS/KKW",
    "phone": 9004474661
  },
  {
    "name": "B S Gavas",
    "designation": "PWS/SWV",
    "phone": 9004474688
  },
  {
    "name": "P G Mazgaonkar",
    "designation": "PWS/SWV",
    "phone": 9004474655
  },
  {
    "name": "J Malvankar",
    "designation": "PWS/MADR",
    "phone": 9004474696
  },
  {
    "name": "H S Raut",
    "designation": "APWS/KOL",
    "phone": 9004474662
  },
  {
    "name": "Ganesh Joshi",
    "designation": "APWS/MNI",
    "phone": 9004474675
  },
  {
    "name": "M S Deshmukh",
    "designation": "APWS/KFD",
    "phone": 9004474664
  },
  {
    "name": "G S Kadam",
    "designation": "APWS/KFD",
    "phone": 9004474665
  },
  {
    "name": "S S More",
    "designation": "APWS/DWV",
    "phone": 9004474666
  },
  {
    "name": "S S Utekar",
    "designation": "APWS/KHED",
    "phone": 9004474667
  },
  {
    "name": "V D Date",
    "designation": "APWS/ANO",
    "phone": 9004474669
  },
  {
    "name": "S R Khariwale",
    "designation": "APWS/CHI",
    "phone": 9004474671
  },
  {
    "name": "B D Kate",
    "designation": "APWS/KMAH",
    "phone": 9004474672
  },
  {
    "name": "V G Lad",
    "designation": "APWS/AVRD",
    "phone": 9004474674
  },
  {
    "name": "G J Chavan",
    "designation": "APWS/UKC",
    "phone": 9004474678
  },
  {
    "name": "N B Bashte",
    "designation": "APWS/RN",
    "phone": 9004474677
  },
  {
    "name": "S M Gurav",
    "designation": "APWS/RN",
    "phone": 9004474676
  },
  {
    "name": "B Y Shinde",
    "designation": "APWS/NIV",
    "phone": 9004474679
  },
  {
    "name": "P K Patil",
    "designation": "APWS/ADVI",
    "phone": 9004474680
  },
  {
    "name": "P S Chawan",
    "designation": "APWS/VBW",
    "phone": 9004474682
  },
  {
    "name": "S S Ghogale",
    "designation": "APWS/VBW",
    "phone": 9004474683
  },
  {
    "name": "B F Girkar",
    "designation": "APWS/NAN",
    "phone": 9004474684
  },
  {
    "name": "S R Gosavi",
    "designation": "APWS/KKW",
    "phone": 9004474686
  },
  {
    "name": "S S More",
    "designation": "APWS/KKW",
    "phone": 9004474685
  },
  {
    "name": "Manohar Goregaonkar",
    "designation": "APWS/MNI",
    "phone": 9004474687
  },
  {
    "name": "S V Birwadkar",
    "designation": "MPUM/RN",
    "phone": 9004474691
  },
  {
    "name": "Gajanan Gaikar",
    "designation": "TSM",
    "phone": 7410100153
  },
  {
    "name": "D S Rasal",
    "designation": "TSM1",
    "phone": 7410100181
  },
  {
    "name": "Sambbaji Jadhav",
    "designation": "TSM1",
    "phone": 7410100267
  },
  {
    "name": "Namdeo M Khandekar",
    "designation": "TSM1",
    "phone": 7410100292
  },
  {
    "name": "D D Ghavate",
    "designation": "TSM1",
    "phone": 7410100327
  },
  {
    "name": "R J Deshmukh",
    "designation": "TSM1",
    "phone": 7410100334
  },
  {
    "name": "D T Ghadi",
    "designation": "TSM1",
    "phone": 7410100342
  },
  {
    "name": "R J Takale",
    "designation": "TSM1",
    "phone": 7410100367
  },
  {
    "name": "Vijay Hambir",
    "designation": "TSM1",
    "phone": 7410100495
  },
  {
    "name": "Dattatray Bhalekar",
    "designation": "TSM1",
    "phone": 7410100514
  },
  {
    "name": "Sakharam Karale",
    "designation": "TSM1",
    "phone": 7410100593
  },
  {
    "name": "Pravin Gaikar",
    "designation": "TSM1",
    "phone": 7410100637
  },
  {
    "name": "Hasan Mahadik",
    "designation": "TSM1",
    "phone": 7410100662
  },
  {
    "name": "N G Sanap",
    "designation": "TSM1",
    "phone": 7410100678
  },
  {
    "name": "Sanjay Kadam",
    "designation": "TSM1",
    "phone": 7410100704
  },
  {
    "name": "R M Tawade",
    "designation": "TSM",
    "phone": 7410100753
  },
  {
    "name": "S B Udeg",
    "designation": "TSM",
    "phone": 7410100840
  },
  {
    "name": "Lalbahadur Kanojia",
    "designation": "TSM",
    "phone": 7410100913
  },
  {
    "name": "Deepak Pawar",
    "designation": "TSM",
    "phone": 7410100991
  },
  {
    "name": "Santosh B Pawar",
    "designation": "TSM",
    "phone": 7410101123
  },
  {
    "name": "Chandrakant Kamble",
    "designation": "TSM",
    "phone": 7410101190
  },
  {
    "name": "Dattatray M Pawar",
    "designation": "TSM",
    "phone": 7410101294
  },
  {
    "name": "S K Kamble",
    "designation": "TSM",
    "phone": 7410101308
  },
  {
    "name": "D B Harekar",
    "designation": "TSM",
    "phone": 7410101396
  },
  {
    "name": "V H Sawant",
    "designation": "TSM",
    "phone": 7410101403
  },
  {
    "name": "Mangesh Kamble",
    "designation": "TSM",
    "phone": 7410101447
  },
  {
    "name": "Rajendra Chalke",
    "designation": "TSM",
    "phone": 7410101460
  },
  {
    "name": "D G Mishal",
    "designation": "TSM",
    "phone": 7410101480
  },
  {
    "name": "Santosh D Shinde",
    "designation": "TSM",
    "phone": 7410101573
  },
  {
    "name": "V K Kudalkar",
    "designation": "TSM",
    "phone": 7410101618
  },
  {
    "name": "S G Dhargalkar",
    "designation": "TSM",
    "phone": 7410101660
  },
  {
    "name": "G G Deolkar",
    "designation": "TSM",
    "phone": 7410101728
  },
  {
    "name": "R R Guhagarkar",
    "designation": "TSM",
    "phone": 7410101828
  },
  {
    "name": "N D Ghanekar",
    "designation": "TSM",
    "phone": 7410101867
  },
  {
    "name": "S K Bhuran",
    "designation": "TSM",
    "phone": 7410101870
  },
  {
    "name": "H B Jambhare",
    "designation": "TSM",
    "phone": 7410101945
  },
  {
    "name": "S B Bhuruk",
    "designation": "TSM",
    "phone": 7410101993
  },
  {
    "name": "N L Chavan",
    "designation": "TSM",
    "phone": 7410101997
  },
  {
    "name": "S V More",
    "designation": "TSM",
    "phone": 7410102038
  },
  {
    "name": "Mangesh M Kadam",
    "designation": "TSM",
    "phone": 7410102045
  },
  {
    "name": "Vijkas Bhikaji Pawar",
    "designation": "TSM",
    "phone": 7410102106
  },
  {
    "name": "A V Tambe",
    "designation": "TSM",
    "phone": 7410102156
  },
  {
    "name": "Santosh Gamare",
    "designation": "TSM",
    "phone": 7410102168
  },
  {
    "name": "V V Dangmodekar",
    "designation": "TSM",
    "phone": 7410102228
  },
  {
    "name": "Rajaram R Ghag",
    "designation": "TSM",
    "phone": 7410102243
  },
  {
    "name": "N P Parab",
    "designation": "TSM",
    "phone": 7410102250
  },
  {
    "name": "Narayan Jadhav",
    "designation": "TSM",
    "phone": 7410102324
  },
  {
    "name": "C G Narkar",
    "designation": "TSM",
    "phone": 7410102379
  },
  {
    "name": "R R Pednekar",
    "designation": "TSM",
    "phone": 7410102489
  },
  {
    "name": "A D Pawar",
    "designation": "TSM",
    "phone": 7410102530
  },
  {
    "name": "Mahesh K Jadhav",
    "designation": "TSM",
    "phone": 7410102536
  },
  {
    "name": "Sharad M Jadhav",
    "designation": "TSM",
    "phone": 7410102548
  },
  {
    "name": "P S Mhapankar",
    "designation": "TSM",
    "phone": 7410102570
  },
  {
    "name": "Mahadev Desai",
    "designation": "TSM",
    "phone": 7410102584
  },
  {
    "name": "Pralhad S Gotad",
    "designation": "TSM",
    "phone": 7410102646
  },
  {
    "name": "Sanjay V Joshi",
    "designation": "TSM",
    "phone": 7410102688
  },
  {
    "name": "D B Gurav",
    "designation": "TSM",
    "phone": 7410102856
  },
  {
    "name": "Sanjay Shikhare",
    "designation": "TSM",
    "phone": 7410102978
  },
  {
    "name": "R C Pawaskar",
    "designation": "TSM",
    "phone": 7410103367
  },
  {
    "name": "P S Mahadik",
    "designation": "TSM",
    "phone": 7410103458
  },
  {
    "name": "M S Jadhav",
    "designation": "TSM",
    "phone": 7410103472
  },
  {
    "name": "S S Sawant",
    "designation": "TSM",
    "phone": 7410103547
  },
  {
    "name": "P S Kamble",
    "designation": "TSM",
    "phone": 7410103606
  },
  {
    "name": "S M Sawant",
    "designation": "TSM",
    "phone": 7410103614
  },
  {
    "name": "Sanjay R Shinde",
    "designation": "TSM",
    "phone": 7410103615
  },
  {
    "name": "Ramchandra Sawant",
    "designation": "TSM",
    "phone": 7410103659
  },
  {
    "name": "Uday Gaonkar",
    "designation": "TSM",
    "phone": 7410103701
  },
  {
    "name": "Anil Ganapat Ghatkar",
    "designation": "TSM",
    "phone": 7410103748
  },
  {
    "name": "Amol C Sawantdesai",
    "designation": "TSM",
    "phone": 7410103792
  },
  {
    "name": "S V More",
    "designation": "TM-I",
    "phone": 9226084137
  },
  {
    "name": "R G Chalke",
    "designation": "TM-I",
    "phone": 9226084138
  },
  {
    "name": "K S Bole",
    "designation": "TM-I",
    "phone": 9226084139
  },
  {
    "name": "RMV/RN",
    "designation": "RMV/RN",
    "phone": 9004474632
  },
  {
    "name": "RMV/CHI",
    "designation": "RMV/CHI",
    "phone": 9004474644
  },
  {
    "name": "RMV/RAJP",
    "designation": "RMV/RAJP",
    "phone": 9004474636
  },
  {
    "name": "RMV/MNI",
    "designation": "RMV/MNI",
    "phone": 9004474643
  },
  {
    "name": "RMV/KUDL",
    "designation": "RMV/KUDL",
    "phone": 9004474668
  },
  {
    "name": "ORH/KUDL",
    "designation": "ORH/KUDL",
    "phone": 9004474638
  },
  {
    "name": "M R Dabolkar",
    "designation": "Dr/SSE/KKW",
    "phone": 9004474654
  },
  {
    "name": "Milind Lingayat",
    "designation": "DR/SGR",
    "phone": 9004474634
  },
  {
    "name": "P G Surve",
    "designation": "DR/RN",
    "phone": 9004474695
  },
  {
    "name": "Ali Abbas Kadri",
    "designation": "DR/CHI",
    "phone": 9004474681
  },
  {
    "name": "S K Pandit",
    "designation": "RMIT/RN",
    "phone": 9004474412
  },
  {
    "name": "SP/MNI",
    "designation": "SP/MNI",
    "phone": 9004474775
  },
  {
    "name": "P S Chikhale",
    "designation": "SAIT/KHED",
    "phone": 9004474776
  },
  {
    "name": "Mahesh Revandkar",
    "designation": "SP/CHI",
    "phone": 9004474777
  },
  {
    "name": "S Bhadvalkar",
    "designation": "SP/SGR",
    "phone": 9004474778
  },
  {
    "name": "M Karandikar",
    "designation": "SA/RN",
    "phone": 9004474779
  },
  {
    "name": "N Wadkar",
    "designation": "SA/RN",
    "phone": 9004474781
  },
  {
    "name": "Manisha Patil",
    "designation": "SA/RN",
    "phone": 9004474785
  },
  {
    "name": "T P Dhumal",
    "designation": "SP(IT)",
    "phone": 9004474443
  },
  {
    "name": "S P Kanavaje",
    "designation": "SP/IT/VID",
    "phone": 9004474782
  },
  {
    "name": "M S Rane",
    "designation": "SP/KKW",
    "phone": 9004474783
  },
  {
    "name": "SP/KUDL",
    "designation": "SP/KUDL",
    "phone": 9004474784
  },
  {
    "name": "T Kumaran",
    "designation": "RME/RN",
    "phone": 9004474404, isHOD: true
  },
  {
    "name": "AME/RN",
    "designation": "AME",
    "phone": 7400408352, isHOD: true
  },
  {
    "name": "AME/RN",
    "designation": "AME",
    "phone": 7400408108, isHOD: true
  },
  {
    "name": "G K Lokhande",
    "designation": "SSE/M/RN",
    "phone": 9004474801
  },
  {
    "name": "Pritam Pandurkar",
    "designation": "SSE/M/RN",
    "phone": 9004474928
  },
  {
    "name": "V N Bhosale",
    "designation": "SSE/M/RN",
    "phone": 7410057656
  },
  {
    "name": "N J Patwardhan",
    "designation": "SSE/I/Mech",
    "phone": 7410057657
  },
  {
    "name": "S G Gurav",
    "designation": "SSE/I/Mech",
    "phone": 7400408146
  },
  {
    "name": "V N Bhosale (TAB)",
    "designation": "SSE/M/RN",
    "phone": 7400408112
  },
  {
    "name": "V D Apshinge",
    "designation": "JE/M/KOL",
    "phone": 9004474803
  },
  {
    "name": "S J Malgunkar",
    "designation": "JE/M/CHI",
    "phone": 9004474858
  },
  {
    "name": "A S Sonar",
    "designation": "JE/MECH",
    "phone": 9004474808
  },
  {
    "name": "V N Bhosale",
    "designation": "JE/M/RN",
    "phone": 9004474807
  },
  {
    "name": "N P Vankar",
    "designation": "JE/Mech",
    "phone": 9004474850
  },
  {
    "name": "S R Khedekar",
    "designation": "JE/MECH",
    "phone": 9004474811
  },
  {
    "name": "S K Tambe",
    "designation": "JE/MECH",
    "phone": 9004474810
  },
  {
    "name": "N J Patwardhan",
    "designation": "JE/I/Mech",
    "phone": 9004474809
  },
  {
    "name": "U D Nalawade",
    "designation": "JE/M/RN",
    "phone": 9004474806
  },
  {
    "name": "N C Palange",
    "designation": "JE/M/RN",
    "phone": 9004474805
  },
  {
    "name": "A S Sonar",
    "designation": "JE/MECH/CHI",
    "phone": 7410057658
  },
  {
    "name": "V D Apsinge",
    "designation": "JE/M/KOL",
    "phone": 7410057659
  },
  {
    "name": "JE/Mech/RN",
    "designation": "JE/Mech",
    "phone": 8010903419
  },
  {
    "name": "P Y Kubal",
    "designation": "CREW MGR/VEN",
    "phone": 8010903410
  },
  {
    "name": "S B Kamble",
    "designation": "CREW MGR/RN",
    "phone": 8010903416
  },
  {
    "name": "K V Mandavkar",
    "designation": "CREW MGR/RN",
    "phone": 8010903417
  },
  {
    "name": "K.V.Mandavkar",
    "designation": "Crew./Mgr",
    "phone": 9004474815
  },
  {
    "name": "Raviranjan",
    "designation": "CLI/RN",
    "phone": 9004474812
  },
  {
    "name": "Y N Kale",
    "designation": "CLI/RN",
    "phone": 9004474886
  },
  {
    "name": "Ravinjanan(RCD CHI)",
    "designation": "LI",
    "phone": 7410057660
  },
  {
    "name": "S T Parbalkar",
    "designation": "LPM/RN",
    "phone": 9004474840
  },
  {
    "name": "R K Sakpal",
    "designation": "LPM/RN",
    "phone": 9004474837
  },
  {
    "name": "J L Jagtap",
    "designation": "LPM/RN",
    "phone": 9004474820
  },
  {
    "name": "S H Ghadge",
    "designation": "LPM/RN",
    "phone": 9004474834
  },
  {
    "name": "A S More",
    "designation": "CREW MGR/RN",
    "phone": 9004474816
  },
  {
    "name": "S S Katke",
    "designation": "LPM/RN",
    "phone": 9004474855
  },
  {
    "name": "S K Raut",
    "designation": "LPM/RN",
    "phone": 9004474836
  },
  {
    "name": "R P Dhamange",
    "designation": "LPM/RN",
    "phone": 9004474848
  },
  {
    "name": "R K Shingole",
    "designation": "CLI/RN",
    "phone": 9004474835
  },
  {
    "name": "Amol Bendre",
    "designation": "ALP/RN",
    "phone": 9004474832
  },
  {
    "name": "Sachin P Salvi",
    "designation": "LPG/RN",
    "phone": 9004474849
  },
  {
    "name": "Durgesh Chandra.",
    "designation": "LPP/RN",
    "phone": 9004474842
  },
  {
    "name": "G S Narkar",
    "designation": "CREW MGR/RN",
    "phone": 9004474852
  },
  {
    "name": "Rajbahadur",
    "designation": "CLI/NEPAL",
    "phone": 9004474847
  },
  {
    "name": "D P Shingare",
    "designation": "LPM/RN",
    "phone": 9004474819
  },
  {
    "name": "O M Mathapati",
    "designation": "LPM/RN",
    "phone": 9004474823
  },
  {
    "name": "V B Kamble",
    "designation": "LPM/RN",
    "phone": 9004474839
  },
  {
    "name": "R K Date",
    "designation": "CREW MGR/RN",
    "phone": 9004474827
  },
  {
    "name": "Priya Tetgure",
    "designation": "ALP/RN",
    "phone": 9004474851
  },
  {
    "name": "Sunil Keer",
    "designation": "LPG/RN",
    "phone": 9004474828
  },
  {
    "name": "S M Akerkar",
    "designation": "LPM/RN",
    "phone": 9004474824
  },
  {
    "name": "S D Ghole",
    "designation": "LPM/RN",
    "phone": 9004474830
  },
  {
    "name": "Sachin Jadhav",
    "designation": "ALP/RN",
    "phone": 9004474825
  },
  {
    "name": "U V Patil",
    "designation": "LPM/RN",
    "phone": 9004474838
  },
  {
    "name": "Spare",
    "designation": "LP",
    "phone": 9004474817
  },
  {
    "name": "Amit Sawant",
    "designation": "LPM/RN",
    "phone": 9004474829
  },
  {
    "name": "M D Jangam",
    "designation": "LPM/RN",
    "phone": 8010903411
  },
  {
    "name": "A V Adhav",
    "designation": "LPM/RN",
    "phone": 8010903412
  },
  {
    "name": "S P Bansod",
    "designation": "LPM/RN",
    "phone": 8010903413
  },
  {
    "name": "S S Katke",
    "designation": "LPM/RN",
    "phone": 8010903414
  },
  {
    "name": "R P Nandurkar",
    "designation": "LPG/RN",
    "phone": 9004474853
  },
  {
    "name": "Jagdish Sonawane",
    "designation": "LPG/RN",
    "phone": 9004474845
  },
  {
    "name": "Pendhari",
    "designation": "LPG/RN",
    "phone": 9004474846
  },
  {
    "name": "R V Puranik",
    "designation": "LPM/RN",
    "phone": 9004474844
  },
  {
    "name": "P T Malgunkar",
    "designation": "LPM/RN",
    "phone": 9004474841
  },
  {
    "name": "Sikhandar R Mulla",
    "designation": "LPG/RN",
    "phone": 9004478959
  },
  {
    "name": "P K Sawant",
    "designation": "LPP/RN",
    "phone": 9004478955
  },
  {
    "name": "P T Mhade",
    "designation": "LPG/RN",
    "phone": 9004478962
  },
  {
    "name": "K D Korgonkar",
    "designation": "LPG/RN",
    "phone": 9004478954
  },
  {
    "name": "S S Divekar",
    "designation": "CLI/RN",
    "phone": 9004478967
  },
  {
    "name": "Vilas V Tambe",
    "designation": "LPG/RN",
    "phone": 9004478966
  },
  {
    "name": "S S Pawar",
    "designation": "CLI/RN",
    "phone": 9004478960
  },
  {
    "name": "Sajan Pawar",
    "designation": "RR INCHRG/RN",
    "phone": 9004478952
  },
  {
    "name": "Jayesh S Sonavane",
    "designation": "LPG/RN",
    "phone": 9004478956
  },
  {
    "name": "Pramod M Chauthe",
    "designation": "LPG/RN",
    "phone": 9004478953
  },
  {
    "name": "V M Pawar",
    "designation": "LPG/RN",
    "phone": 9004478958
  },
  {
    "name": "Hemant V Narvekar",
    "designation": "LPG/RN",
    "phone": 9004478965
  },
  {
    "name": "A V Naik",
    "designation": "LPG/RN",
    "phone": 9004478961
  },
  {
    "name": "S K Yadav",
    "designation": "PRC/BEL",
    "phone": 9004478963
  },
  {
    "name": "Akash Saigaonkar",
    "designation": "LPP/RN",
    "phone": 9004474862
  },
  {
    "name": "S H Nirmal",
    "designation": "CREW MGR/RN",
    "phone": 9004474865
  },
  {
    "name": "J S Kadu",
    "designation": "LPG/RN",
    "phone": 9004474867
  },
  {
    "name": "G S Javarat",
    "designation": "LPG/RN",
    "phone": 9004474870
  },
  {
    "name": "J B Bhuran",
    "designation": "LPG/RN",
    "phone": 9004474861
  },
  {
    "name": "S S Patil",
    "designation": "LPG/RN",
    "phone": 9004474864
  },
  {
    "name": "Makarand A Kadam",
    "designation": "LPG/RN",
    "phone": 9004474868
  },
  {
    "name": "S R Mhapralkar",
    "designation": "LPG/RN",
    "phone": 9004474863
  },
  {
    "name": "S N Gholap",
    "designation": "LPG/RN",
    "phone": 9004474869
  },
  {
    "name": "S D Pawaskar",
    "designation": "LPG/RN",
    "phone": 9004474866
  },
  {
    "name": "V S Kokaje",
    "designation": "LPG/RN",
    "phone": 9004474419
  },
  {
    "name": "K K Kamble",
    "designation": "LPG/RN",
    "phone": 9004474417
  },
  {
    "name": "S G Gawade",
    "designation": "LPG/RN",
    "phone": 9004474414
  },
  {
    "name": "A I Mirkar",
    "designation": "LPG/RN",
    "phone": 9004474416
  },
  {
    "name": "R S Rane",
    "designation": "LPG/RN",
    "phone": 9004474415
  },
  {
    "name": "Utkesh P Jadhav",
    "designation": "LPG/RN",
    "phone": 7400408101
  },
  {
    "name": "Pankaj Bhole",
    "designation": "ALP/RN",
    "phone": 7400408149
  },
  {
    "name": "Mithun Shinde",
    "designation": "LPG/VEN",
    "phone": 7400408103
  },
  {
    "name": "Amit Agawekar",
    "designation": "ALP",
    "phone": 7400408141
  },
  {
    "name": "Vijay Bandabe",
    "designation": "ALP/RN",
    "phone": 7400408145
  },
  {
    "name": "SamIr Shiwalkar",
    "designation": "LPG/RN",
    "phone": 7400408107
  },
  {
    "name": "Abhay Dabholkar",
    "designation": "LPG/RN",
    "phone": 7400408105
  },
  {
    "name": "Sameer Jadhav",
    "designation": "ALP/RN",
    "phone": 7400408142
  },
  {
    "name": "S S Shigavan",
    "designation": "ALP/RN",
    "phone": 7400408150
  },
  {
    "name": "S D Padalkar",
    "designation": "ALP/RN",
    "phone": 7400408120
  },
  {
    "name": "P D Bharathi",
    "designation": "ALP/RN",
    "phone": 7400408122
  },
  {
    "name": "Prakash Chavan",
    "designation": "ALP/RN",
    "phone": 7400408157
  },
  {
    "name": "Mukesh Pawar",
    "designation": "LPS/TOK",
    "phone": 7400408152
  },
  {
    "name": "Mahendra Mayekar",
    "designation": "ALP/RN",
    "phone": 7400408147
  },
  {
    "name": "Sandeep Jabre",
    "designation": "ALP/RN",
    "phone": 7400408143
  },
  {
    "name": "Tejas Thite",
    "designation": "ALP/RN",
    "phone": 7400408156
  },
  {
    "name": "Aniket Bharathi",
    "designation": "ALP/RN",
    "phone": 7400408129
  },
  {
    "name": "P D Nirmal",
    "designation": "ALP/RN",
    "phone": 7400408125
  },
  {
    "name": "Naresh Bendal",
    "designation": "ALP/RN",
    "phone": 7400408165
  },
  {
    "name": "Sachin Yelve",
    "designation": "ALP/RN",
    "phone": 7400408163
  },
  {
    "name": "Sanjay Todkari",
    "designation": "ALP/RN",
    "phone": 7400408159
  },
  {
    "name": "Avinash Mohite",
    "designation": "LPG/RN",
    "phone": 7400408130
  },
  {
    "name": "S N Bhoir",
    "designation": "LPG/RN",
    "phone": 7400408126
  },
  {
    "name": "Amit Padalkar",
    "designation": "ALP/RN",
    "phone": 7400408161
  },
  {
    "name": "K S Satam",
    "designation": "ALP/RN",
    "phone": 7400408131
  },
  {
    "name": "Vaibhav GaVkar",
    "designation": "ALP/RN",
    "phone": 7400408160
  },
  {
    "name": "Siddhesh Pawar",
    "designation": "LPG/RN",
    "phone": 7400408102
  },
  {
    "name": "Mandar Ambekar",
    "designation": "ALP/RN",
    "phone": 7400408148
  },
  {
    "name": "Mangesh Phalke",
    "designation": "ALP/RN",
    "phone": 7400408140
  },
  {
    "name": "P S Kawankar",
    "designation": "LPG/RN",
    "phone": 7400408106
  },
  {
    "name": "S H Chorge",
    "designation": "LPS/VEN",
    "phone": 7400408119
  },
  {
    "name": "Ashirwad Ghadshi",
    "designation": "ALP/RN",
    "phone": 7400408151
  },
  {
    "name": "Avinash Rahate",
    "designation": "ALP/RN",
    "phone": 7400408133
  },
  {
    "name": "S M Gadkar",
    "designation": "ALP/RN",
    "phone": 7400408116
  },
  {
    "name": "Sachin Kamble",
    "designation": "LPS/MAO",
    "phone": 7400408158
  },
  {
    "name": "Nimish Kadam",
    "designation": "ALP/RN",
    "phone": 7400408132
  },
  {
    "name": "Ganesh Mayekar",
    "designation": "ALP/RN",
    "phone": 7400408154
  },
  {
    "name": "Sudhir Tambe",
    "designation": "ALP/RN",
    "phone": 7400408155
  },
  {
    "name": "R G Chavan",
    "designation": "ALP/RN",
    "phone": 7400408124
  },
  {
    "name": "S G Palkar",
    "designation": "LPG/RN",
    "phone": 7400408123
  },
  {
    "name": "Bhoopathi E",
    "designation": "LPS/VEN",
    "phone": 7400408121
  },
  {
    "name": "Manish Shinde",
    "designation": "ALP/RN",
    "phone": 7400408153
  },
  {
    "name": "D G Date",
    "designation": "LP/RN",
    "phone": 7400408115
  },
  {
    "name": "Mujeeb Hajwani",
    "designation": "LPG/RN",
    "phone": 7400408117
  },
  {
    "name": "S S Talkatkar",
    "designation": "LPG/RN",
    "phone": 7400408118
  },
  {
    "name": "Sanjay Kamble",
    "designation": "LPG/RN",
    "phone": 7400408128
  },
  {
    "name": "Tejas Sakharkar",
    "designation": "LPS/MAO",
    "phone": 7400408144
  },
  {
    "name": "Prakash Bhojane",
    "designation": "LPG/RN",
    "phone": 7400408104
  },
  {
    "name": "Praful Pawar",
    "designation": "LPG/RN",
    "phone": 7400408134
  },
  {
    "name": "S P Khatate",
    "designation": "ALP/RN",
    "phone": 7400408169
  },
  {
    "name": "Praveen Dait",
    "designation": "ALP/RN",
    "phone": 7400408168
  },
  {
    "name": "Arun Potale",
    "designation": "ALP/RN",
    "phone": 7400408166
  },
  {
    "name": "Ashok Gandhi",
    "designation": "ALP/RN",
    "phone": 7400408164
  },
  {
    "name": "Rajaram Nirmal",
    "designation": "ALP/RN",
    "phone": 7400408167
  },
  {
    "name": "S Rovalekar",
    "designation": "ALP/RN",
    "phone": 7400408135
  },
  {
    "name": "V V Karambat",
    "designation": "ALP/RN",
    "phone": 7400408136
  },
  {
    "name": "P D Harekar",
    "designation": "ALP/RN",
    "phone": 7400408162
  },
  {
    "name": "A R Shirodkar",
    "designation": "LPM/RN",
    "phone": 9004474813
  },
  {
    "name": "Jayesh More",
    "designation": "ALP/RN",
    "phone": 8010903380
  },
  {
    "name": "Amit Helgaonkar",
    "designation": "ALP/RN",
    "phone": 8010903381
  },
  {
    "name": "Mahesh Shiwade",
    "designation": "ALP/RN",
    "phone": 8010903383
  },
  {
    "name": "Vaibhav Ayare",
    "designation": "ALP/RN",
    "phone": 8010903384
  },
  {
    "name": "Aniket Pawar",
    "designation": "ALP/RN",
    "phone": 8010903385
  },
  {
    "name": "Pravin Surve",
    "designation": "ALP/RN",
    "phone": 8010903388
  },
  {
    "name": "Dinesh Jogale",
    "designation": "ALP/RN",
    "phone": 8010903390
  },
  {
    "name": "Nitin Dandekar",
    "designation": "ALP/RN",
    "phone": 8010903391
  },
  {
    "name": "Kausthub P Dhekane",
    "designation": "ALP/RN",
    "phone": 8010903392
  },
  {
    "name": "Pravin Parawe",
    "designation": "ALP/RN",
    "phone": 8010903394
  },
  {
    "name": "Rakesh Khapare",
    "designation": "ALP/RN",
    "phone": 8010903395
  },
  {
    "name": "Ashish Dahivalkar",
    "designation": "ALP/RN",
    "phone": 8010903396
  },
  {
    "name": "Nilesh Luman",
    "designation": "ALP/RN",
    "phone": 8010903397
  },
  {
    "name": "Anil Astivkar",
    "designation": "ALP/RN",
    "phone": 8010903398
  },
  {
    "name": "Parag Khatate",
    "designation": "ALP/RN",
    "phone": 8010903399
  },
  {
    "name": "Vishal Kamble",
    "designation": "ALP/RN",
    "phone": 8010903401
  },
  {
    "name": "Prafulla Tambe",
    "designation": "ALP/RN",
    "phone": 8010903402
  },
  {
    "name": "N N Dambe",
    "designation": "ALP/RN",
    "phone": 8010903403
  },
  {
    "name": "Sandeep Jadhav",
    "designation": "ALP",
    "phone": 8010903405
  },
  {
    "name": "Alpesh Ghorpade",
    "designation": "ALP/RN",
    "phone": 8010903406
  },
  {
    "name": "T M Nirmal",
    "designation": "ALP/RN",
    "phone": 8010903407
  },
  {
    "name": "S D More",
    "designation": "ALP/RN",
    "phone": 8010903408
  },
  {
    "name": "Yogesh Lohar",
    "designation": "ALP/RN",
    "phone": 8010903409
  },
  {
    "name": "Rupesh Padvekar",
    "designation": "ALP/RN",
    "phone": 8010903415
  },
  {
    "name": "Parag Jadhav",
    "designation": "ALP/RN",
    "phone": 8010903387
  },
  {
    "name": "CSM/RN",
    "designation": "CSM/RN",
    "phone": 9004474860
  },
  {
    "name": "S B Gujar",
    "designation": "TECMI/I",
    "phone": 7400408109
  },
  {
    "name": "R G More",
    "designation": "TECMI/I",
    "phone": 7400408139
  },
  {
    "name": "K A Kharde",
    "designation": "TECMI/I",
    "phone": 7400408113
  },
  {
    "name": "Lobby Ratnagiri",
    "designation": "Lobby RN",
    "phone": 9004474814
  },
  {
    "name": "Dr Nagnath Jillewad",
    "designation": "Dy CMO/RN",
    "phone": 9004474405
  },
  {
    "name": "Dr Satishkumar Naik Jarapala",
    "designation": "MO/CHI",
    "phone": 9004474505
  },
  {
    "name": "S Dhamnskar",
    "designation": "PHN/CHI",
    "phone": 9004474751
  },
  {
    "name": "A Pandit",
    "designation": "PHN/RN",
    "phone": 9004474750
  },
  {
    "name": "Shankar T Shirke",
    "designation": "MPHW/CHI",
    "phone": 9004474757
  },
  {
    "name": "Manoj K",
    "designation": "MPHW/CHI",
    "phone": 9004474758
  },
  {
    "name": "R H Chavan",
    "designation": "MPHW/CHI",
    "phone": 9004474756
  },
  {
    "name": "Chandrakant Mukri",
    "designation": "MPHW/RN",
    "phone": 9004474753
  },
  {
    "name": "Upendre Kumar",
    "designation": "MPHW/RN",
    "phone": 9004474754
  },
  {
    "name": "Ravi Naik",
    "designation": "MPHW/RN",
    "phone": 9004474752
  },
  {
    "name": "K B Kotharkar",
    "designation": "MPHW/RN",
    "phone": 9004474755
  },
  {
    "name": "RTM/II/RN",
    "designation": "RTM/II/RN",
    "phone": 8668699798
  },
  {
    "name": "Prashant Gad",
    "designation": "ATM/RN",
    "phone": 9004474411
  },
  {
    "name": "AS/RN",
    "designation": "AS/RN II",
    "phone": 9004474579
  },
  {
    "name": "AS/CHI",
    "designation": "AS/CHI",
    "phone": 9004474540
  },
  {
    "name": "B A Kove",
    "designation": "SS/RN",
    "phone": 9004474578
  },
  {
    "name": "M N Roy",
    "designation": "AS/RN",
    "phone": 9004474541
  },
  {
    "name": "R S Sarvankar",
    "designation": "M/E Train Manager (METM)/RN",
    "phone": 9004478951
  },
  {
    "name": "Arvind Kumar",
    "designation": "M/E Train Manager (METM)/RN",
    "phone": 9004478327
  },
  {
    "name": "P P Walawalkar",
    "designation": "M/E Train Manager (METM)/RN",
    "phone": 9004478395
  },
  {
    "name": "B R Rane",
    "designation": "M/E Train Manager (METM)/RN",
    "phone": 9004478396
  },
  {
    "name": "P S Manjarekar",
    "designation": "M/E Train Manager (METM)/RN",
    "phone": 9004478330
  },
  {
    "name": "Sameer Pendse",
    "designation": "M/E Train Manager (METM)/RN",
    "phone": 9004478318
  },
  {
    "name": "A Y Kulkarni",
    "designation": "M/E Train Manager (METM)/RN",
    "phone": 9004478321
  },
  {
    "name": "Jayanth S Tambe",
    "designation": "M/E Train Manager (METM)/RN",
    "phone": 9004478137
  },
  {
    "name": "Y D Pawar",
    "designation": "M/E Train Manager (METM)/RN",
    "phone": 9004478282
  },
  {
    "name": "Purushattam U",
    "designation": "M/E Train Manager (METM)/RN",
    "phone": 9004478271
  },
  {
    "name": "Shekar Dalvi",
    "designation": "M/E Train Manager (METM)/RN",
    "phone": 9004478304
  },
  {
    "name": "Santosh Humne",
    "designation": "M/E Train Manager (METM)/RN",
    "phone": 9004478309
  },
  {
    "name": "Arun Sardal",
    "designation": "M/E Train Manager (METM)/RN",
    "phone": 9004478303
  },
  {
    "name": "V P Kadam",
    "designation": "M/E Train Manager (METM)/RN",
    "phone": 9004478266
  },
  {
    "name": "A A Toppa",
    "designation": "M/E Train Manager (METM)/RN",
    "phone": 9004478254
  },
  {
    "name": "Santosh S Tambe",
    "designation": "M/E Train Manager (METM)/RN",
    "phone": 9004478138
  },
  {
    "name": "Deepak S Naik",
    "designation": "Senior Goods Train Manager (SGTM)/RN",
    "phone": 9004478977
  },
  {
    "name": "S Develkar",
    "designation": "Senior Goods Train Manager (SGTM)/RN",
    "phone": 9004478909
  },
  {
    "name": "D K Pawar",
    "designation": "Senior Goods Train Manager (SGTM)/RN",
    "phone": 9004478827
  },
  {
    "name": "P D Manjrekar",
    "designation": "Senior Goods Train Manager (SGTM)/RN",
    "phone": 9004478873
  },
  {
    "name": "Yogesh Ghag",
    "designation": "Senior Goods Train Manager (SGTM)/RN",
    "phone": 9004478839
  },
  {
    "name": "M C Gavnang",
    "designation": "Senior Goods Train Manager (SGTM)/RN",
    "phone": 9004478920
  },
  {
    "name": "D Dicholkar",
    "designation": "Senior Goods Train Manager (SGTM)/RN",
    "phone": 9004478880
  },
  {
    "name": "S S Sandye",
    "designation": "M/E Train Manager (METM)/RN",
    "phone": 9004478494
  },
  {
    "name": "R B Shinde",
    "designation": "M/E Train Manager (METM)/RN",
    "phone": 9004478786
  },
  {
    "name": "Vilas S Khedekar",
    "designation": "Senior Goods Train Manager (SGTM)/RN",
    "phone": 9004478887
  },
  {
    "name": "R More",
    "designation": "Senior Goods Train Manager (SGTM)/RN",
    "phone": 9004478886
  },
  {
    "name": "S S Kadam",
    "designation": "M/E Train Manager (METM)/RN",
    "phone": 9004478399
  },
  {
    "name": "Vishnu S Parab",
    "designation": "M/E Train Manager (METM)/RN",
    "phone": 9004478398
  },
  {
    "name": "R C Lokhande",
    "designation": "Passenger Train Manager (PTM)/RN",
    "phone": 9004478830
  },
  {
    "name": "Atmaram M Naik",
    "designation": "M/E Train Manager (METM)/RN",
    "phone": 9004478475
  },
  {
    "name": "V D Rane",
    "designation": "Passenger Train Manager (PTM)/RN",
    "phone": 9004478819
  },
  {
    "name": "R S Patole",
    "designation": "M/E Train Manager (METM)/RN",
    "phone": 9004478550
  },
  {
    "name": "Pranay Tambe",
    "designation": "Passenger Train Manager (PTM)/RN",
    "phone": 9004478888
  },
  {
    "name": "K S Patole",
    "designation": "Passenger Train Manager (PTM)/RN",
    "phone": 9004478538
  },
  {
    "name": "P V Parab",
    "designation": "M/E Train Manager (METM)/RN",
    "phone": 9004478478
  },
  {
    "name": "Bhushan Pawar",
    "designation": "M/E Train Manager (METM)/RN",
    "phone": 9004478889
  },
  {
    "name": "S B Patil",
    "designation": "Passenger Train Manager (PTM)/RN",
    "phone": 9004478788
  },
  {
    "name": "P G Parab",
    "designation": "M/E Train Manager (METM)/RN",
    "phone": 9004478397
  },
  {
    "name": "B S Kalambate",
    "designation": "Senior Goods Train Manager (SGTM)/RN",
    "phone": 9004478826
  },
  {
    "name": "S Tambitkar",
    "designation": "Senior Goods Train Manager (SGTM)/RN",
    "phone": 9004478975
  },
  {
    "name": "Vinod S Vichare",
    "designation": "Senior Goods Train Manager (SGTM)/RN",
    "phone": 9004478972
  },
  {
    "name": "Rakesh S More",
    "designation": "Senior Goods Train Manager (SGTM)/RN",
    "phone": 9004478973
  },
  {
    "name": "S P Padalkar",
    "designation": "Senior Goods Train Manager (SGTM)/RN",
    "phone": 9004478971
  },
  {
    "name": "A B Zore",
    "designation": "Senior Goods Train Manager (SGTM)/RN",
    "phone": 9004478974
  },
  {
    "name": "Lavu Patil",
    "designation": "Senior Goods Train Manager (SGTM)/RN",
    "phone": 9004478970
  },
  {
    "name": "Dilesh Shirke",
    "designation": "Senior Goods Train Manager (SGTM)/RN",
    "phone": 9004474873
  },
  {
    "name": "V Udeg",
    "designation": "Senior Goods Train Manager (SGTM)/RN",
    "phone": 9004474874
  },
  {
    "name": "R C Parab",
    "designation": "Senior Goods Train Manager (SGTM)/RN",
    "phone": 9004474953
  },
  {
    "name": "H Sawant",
    "designation": "Senior Goods Train Manager (SGTM)/RN",
    "phone": 9004474935
  },
  {
    "name": "V Rane",
    "designation": "Senior Goods Train Manager (SGTM)/RN",
    "phone": 9004474977
  },
  {
    "name": "Maruti Naik",
    "designation": "Senior Goods Train Manager (SGTM)/RN",
    "phone": 9004474980
  },
  {
    "name": "J Sawantdesai",
    "designation": "Senior Goods Train Manager (SGTM)/RN",
    "phone": 9004474944
  },
  {
    "name": "S Bendre",
    "designation": "Senior Goods Train Manager (SGTM)/RN",
    "phone": 9004474951
  },
  {
    "name": "M Topare",
    "designation": "Senior Goods Train Manager (SGTM)/RN",
    "phone": 9004474998
  },
  {
    "name": "Bhavesh Raikar",
    "designation": "Senior Goods Train Manager (SGTM)/RN",
    "phone": 7410056711
  },
  {
    "name": "Kiran Pagade",
    "designation": "Senior Goods Train Manager (SGTM)/RN",
    "phone": 7410056712
  },
  {
    "name": "Shailesh Rane",
    "designation": "Senior Goods Train Manager (SGTM)/RN",
    "phone": 7410056713
  },
  {
    "name": "Yogesh Angchekar",
    "designation": "Goods Train Manager (GTM)/RN",
    "phone": 7410056714
  },
  {
    "name": "Rupesh Saigaonkar",
    "designation": "Senior Goods Train Manager (SGTM)/RN",
    "phone": 8010903425
  },
  {
    "name": "Atul Sawant",
    "designation": "Passenger Train Manager (PTM)/RN",
    "phone": 8010903426
  },
  {
    "name": "Rakesh Bamane",
    "designation": "Passenger Train Manager (PTM)/RN",
    "phone": 8010903427
  },
  {
    "name": "Rohan Shirke",
    "designation": "Senior Goods Train Manager (SGTM)/RN",
    "phone": 8010903428
  },
  {
    "name": "Prashant Kadam",
    "designation": "Senior Goods Train Manager (SGTM)/RN",
    "phone": 8010903431
  },
  {
    "name": "Nilesh Tambe",
    "designation": "Senior Goods Train Manager (SGTM)/RN",
    "phone": 8010903432
  },
  {
    "name": "Sumeet More",
    "designation": "Goods Train Manager (GTM)/RN",
    "phone": 8010903435
  },
  {
    "name": "Harish Thakare",
    "designation": "Senior Goods Train Manager (SGTM)/RN",
    "phone": 8010903436
  },
  {
    "name": "Uday Pawar",
    "designation": "Goods Train Manager (GTM)/RN",
    "phone": 8010903437
  },
  {
    "name": "Abhijeet Murkute",
    "designation": "Goods Train Manager (GTM)/RN",
    "phone": 8010903438
  },
  {
    "name": "Yuvraj Desai",
    "designation": "Goods Train Manager (GTM)/RN",
    "phone": 8010903440
  },
  {
    "name": "Gajanan Borkar",
    "designation": "Senior Goods Train Manager (SGTM)/RN",
    "phone": 8010903441
  },
  {
    "name": "Sanjay Kamble",
    "designation": "Senior Goods Train Manager (SGTM)/RN",
    "phone": 8010903433
  },
  {
    "name": "J L Jevippa",
    "designation": "SI/CHI",
    "phone": 8668791344
  },
  {
    "name": "S S Jangam",
    "designation": "TMR/Booking",
    "phone": 9004478329
  },
  {
    "name": "Kolad",
    "designation": "KOL Station CUG",
    "phone": 9004474549
  },
  {
    "name": "Mangaon",
    "designation": "MNI Station CUG",
    "phone": 9004474551
  },
  {
    "name": "Veer",
    "designation": "VEER Station CUG",
    "phone": 9004474550
  },
  {
    "name": "Karnjadi",
    "designation": "KFD Station CUG",
    "phone": 9004474552
  },
  {
    "name": "Vinhere",
    "designation": "VINH Station CUG",
    "phone": 9004474553
  },
  {
    "name": "Diwankhauti",
    "designation": "DWV Station CUG",
    "phone": 9004474554
  },
  {
    "name": "Khed",
    "designation": "KHED Station CUG",
    "phone": 9004474555
  },
  {
    "name": "Anjani",
    "designation": "ANO Station CUG",
    "phone": 9004474556
  },
  {
    "name": "Chiplun",
    "designation": "CHI Station CUG",
    "phone": 9004474557
  },
  {
    "name": "Kamathe",
    "designation": "KMAH Station CUG",
    "phone": 9004474558
  },
  {
    "name": "Savarda",
    "designation": "SVX Station CUG",
    "phone": 9004474559
  },
  {
    "name": "Aravali Road",
    "designation": "AVRD Station CUG",
    "phone": 9004474560
  },
  {
    "name": "Sangameshwar Road",
    "designation": "SGR Station CUG",
    "phone": 9004474561
  },
  {
    "name": "Ukshi",
    "designation": "UKC Station CUG",
    "phone": 9004474562
  },
  {
    "name": "Bhoke",
    "designation": "BOKE Station CUG",
    "phone": 9004474563
  },
  {
    "name": "Ratnagiri",
    "designation": "RN Station CUG",
    "phone": 9004474564
  },
  {
    "name": "Nivsar",
    "designation": "NIV Station CUG",
    "phone": 9004474565
  },
  {
    "name": "Adavali",
    "designation": "ADVI Station CUG",
    "phone": 9004474566
  },
  {
    "name": "Vilawade",
    "designation": "VID Station CUG",
    "phone": 9004474567
  },
  {
    "name": "Rajapur Road",
    "designation": "RAJP Station CUG",
    "phone": 9004474568
  },
  {
    "name": "Vaibhavwadi Road",
    "designation": "VBW Station CUG",
    "phone": 9004474569
  },
  {
    "name": "Nandgaon Road",
    "designation": "NAN Station CUG",
    "phone": 9004474570
  },
  {
    "name": "Kankavali",
    "designation": "KKW Station CUG",
    "phone": 9004474571
  },
  {
    "name": "Sindhudurg",
    "designation": "SNDD Station CUG",
    "phone": 9004474572
  },
  {
    "name": "Kudal",
    "designation": "KUDL Station CUG",
    "phone": 9004474573
  },
  {
    "name": "Zarap",
    "designation": "ZARP Station CUG",
    "phone": 9004474574
  },
  {
    "name": "Sawantwadi Road",
    "designation": "SWV Station CUG",
    "phone": 9004474576
  },
  {
    "name": "Madure",
    "designation": "MADR Station CUG",
    "phone": 9004474575
  },
  {
    "name": "Deepak Bansode",
    "designation": "VEER Station CUG",
    "phone": 8668793688
  },
  {
    "name": "Nilesh Khedekar",
    "designation": "DWV Station CUG",
    "phone": 8668796505
  },
  {
    "name": "Manoj Bhagat",
    "designation": "KFD Station CUG",
    "phone": 8668796515
  },
  {
    "name": "B L Meena",
    "designation": "KMAH/STN",
    "phone": 8668797276
  },
  {
    "name": "Rupesh Bodas",
    "designation": "VID STN",
    "phone": 8668797351
  },
  {
    "name": "Prashant Tambe",
    "designation": "RAJP/STN",
    "phone": 8668797624
  },
  {
    "name": "Bhupendra K Sinha",
    "designation": "VBW/STN",
    "phone": 8668797646
  },
  {
    "name": "Ramakant Nadkarni",
    "designation": "ZARP/STN",
    "phone": 8668797917
  },
  {
    "name": "Pratiksha L Gaokar",
    "designation": "MADR/STN",
    "phone": 8668798045
  },
  {
    "name": "V D Patole",
    "designation": "SGR/STN",
    "phone": 8668799284
  },
  {
    "name": "Mahendra Joshi",
    "designation": "UKC/STN",
    "phone": 8668799285
  },
  {
    "name": "M S Phansopkar",
    "designation": "BOKE/STN",
    "phone": 8668799287
  },
  {
    "name": "Santosh Karmarkar",
    "designation": "ADVI/STN",
    "phone": 8668799304
  },
  {
    "name": "Madhavi Gangan",
    "designation": "CHI/STN",
    "phone": 8668799324
  },
  {
    "name": "Goregaon Road",
    "designation": "GNO Station CUG",
    "phone": 9004474826
  },
  {
    "name": "Indapur",
    "designation": "INP Station CUG",
    "phone": 9004474649
  },
  {
    "name": "Kharepatan Road",
    "designation": "KRPN Station CUG",
    "phone": 8010903442
  },
  {
    "name": "Sape Wamane",
    "designation": "SAPE Station CUG",
    "phone": 8010903480
  },
  {
    "name": "Kalambani Budruk",
    "designation": "KLBN Station CUG",
    "phone": 9699745802
  },
  {
    "name": "Kadvai",
    "designation": "KDVI Station CUG",
    "phone": 9699745803
  },
  {
    "name": "Achirne",
    "designation": "ACRN Station CUG",
    "phone": 9699745804
  },
  {
    "name": "Veravali",
    "designation": "VRLI Station CUG",
    "phone": 9699745805
  },
  {
    "name": "Kharepatan",
    "designation": "KRPN Station FCT Phone",
    "phone": 9209403280
  },
  {
    "name": "Sape Wamane",
    "designation": "SAPE Station FCT Phone",
    "phone": 9209403279
  },
  {
    "name": "Khed",
    "designation": "KHED Station FCT Phone",
    "phone": 9209403278
  },
  {
    "name": "Vravali",
    "designation": "VRLI Station FCT Phone",
    "phone": 9209403277
  },
  {
    "name": "Achirne",
    "designation": "ACRN Station FCT Phone",
    "phone": 9209403276
  },
  {
    "name": "Kadvai",
    "designation": "KDVI Station FCT Phone",
    "phone": 9209403275
  },
  {
    "name": "Anjani",
    "designation": "ANO Station FCT Phone",
    "phone": 9209403274
  },
  {
    "name": "Kalambani Budruk",
    "designation": "KLBN Station FCT Phone",
    "phone": 9209403273
  },
  {
    "name": "Indapur",
    "designation": "INP Station FCT Phone",
    "phone": 9209403271
  },
  {
    "name": "MOBILE",
    "designation": "INP",
    "phone": 9209403272
  },
  {
    "name": "Goregaon Road",
    "designation": "GNO Station FCT Phone",
    "phone": 9209403270
  },
  {
    "name": "MOBILE",
    "designation": "GNO",
    "phone": 9209403269
  },
  {
    "name": "Mahesh Sakhalkar",
    "designation": "RPO/RN",
    "phone": 9004474408, isHOD: true
  },
  {
    "name": "CPI/Perssonel/RN",
    "designation": "CPI/Perssonel",
    "phone": 7410045364
  },
  {
    "name": "R Kesari",
    "designation": "PI/RN",
    "phone": 9004474539
  },
  {
    "name": "PI/RN",
    "designation": "PI/RN",
    "phone": 9004474698
  },
  {
    "name": "Niranjan Swain",
    "designation": "OA",
    "phone": 9004474418
  },
  {
    "name": "S Y Raskar",
    "designation": "OS",
    "phone": 8010903424
  },
  {
    "name": "Gokul Sononi",
    "designation": "ASC/RN",
    "phone": 9004474406
  },
  {
    "name": "S A Kute",
    "designation": "ASIPF/KOL",
    "phone": 9004474431
  },
  {
    "name": "Ajay Kumar",
    "designation": "SIPF/KKW",
    "phone": 9004474875
  },
  {
    "name": "SI/KKW",
    "designation": "SI/KKW",
    "phone": 8668699801
  },
  {
    "name": "Deepak Baberwal(Spare)",
    "designation": "IPF/C&I/RN",
    "phone": 9004474878
  },
  {
    "name": "Deepak P Sharma",
    "designation": "IPF/CHI",
    "phone": 9004474876
  },
  {
    "name": "Ajit Madhale",
    "designation": "IPF/RN",
    "phone": 9004474877
  },
  {
    "name": "K A Gadge",
    "designation": "CONST/KOL",
    "phone": 9004474884
  },
  {
    "name": "RPF KKW",
    "designation": "CONS/KKW",
    "phone": 9004474879
  },
  {
    "name": "Shrikaant Vairat",
    "designation": "Const/CHI",
    "phone": 9004474883
  },
  {
    "name": "Pravin Kamble",
    "designation": "Const/RN",
    "phone": 9004474881
  },
  {
    "name": "Rakesh Kumar Meena",
    "designation": "RPF/POST/RN",
    "phone": 9004474880
  },
  {
    "name": "Shyamsundar Kaskar",
    "designation": "RSTE/RN",
    "phone": 9004474407
  },
  {
    "name": "Kaustubh Parkar",
    "designation": "SSTE/MNI",
    "phone": 9004474507
  },
  {
    "name": "Pankaj Kamble",
    "designation": "ASTE/KKW",
    "phone": 9004474509
  },
  {
    "name": "Vikas Sardal",
    "designation": "SSE/ST/MNI",
    "phone": 9004474707
  },
  {
    "name": "Vikas Narote",
    "designation": "SSE/ST/CHI",
    "phone": 9004474701
  },
  {
    "name": "Shruti Salunkhe",
    "designation": "SSE/W/RN",
    "phone": 9004474703
  },
  {
    "name": "Akshay B Dhavale",
    "designation": "SSE/ST/TA/RN",
    "phone": 9004474704
  },
  {
    "name": "V S Keer",
    "designation": "SSE/ST/RN",
    "phone": 9004474702
  },
  {
    "name": "S V Bavdhankar",
    "designation": "SSE/VID",
    "phone": 9004474440
  },
  {
    "name": "Abhinav Darwhekar",
    "designation": "SSE/ST/KKW",
    "phone": 9004474706
  },
  {
    "name": "S V Gavande",
    "designation": "SSE/ST/SOC",
    "phone": 9004474705
  },
  {
    "name": "S S Mandavkar",
    "designation": "SSE/HR/RN",
    "phone": 9004474713
  },
  {
    "name": "Vaibhav Waje",
    "designation": "JE/ST/KOL",
    "phone": 9004474119
  },
  {
    "name": "Pranay Mankar",
    "designation": "JE/RM/VINH",
    "phone": 9004474117
  },
  {
    "name": "S J Padalkar",
    "designation": "JE/ST/KHED",
    "phone": 9004474709
  },
  {
    "name": "Sanjay Singh",
    "designation": "JE/II/LR/CHI",
    "phone": 9004474441
  },
  {
    "name": "Milind Pawar",
    "designation": "JE/W/CHI",
    "phone": 8010903423
  },
  {
    "name": "Pranit Dabholkar",
    "designation": "JE/ST/RM/KMAH",
    "phone": 9004474711
  },
  {
    "name": "V.V.Dhanavade",
    "designation": "JE/ST/SGR",
    "phone": 9004474712
  },
  {
    "name": "Pankaj Darokar",
    "designation": "JE/ST/RN",
    "phone": 9004474714
  },
  {
    "name": "Aahana Sawant",
    "designation": "JE/ST/TR/RN",
    "phone": 9004474715
  },
  {
    "name": "Pankaj Tambe",
    "designation": "JE/ST/RM/ADVI",
    "phone": 9004474716
  },
  {
    "name": "Sanjay Dhangade",
    "designation": "JE/ST/VBW",
    "phone": 9004474717
  },
  {
    "name": "Santosh Bapat",
    "designation": "JE/HR/KKW",
    "phone": 9004474719
  },
  {
    "name": "JE/S&T/LR/KKW",
    "designation": "JE/S&T/LR/KKW",
    "phone": 9004474130
  },
  {
    "name": "Santosh Kadam",
    "designation": "JE/S&T/W/KKW",
    "phone": 9004474789
  },
  {
    "name": "M H Dalvi",
    "designation": "JE/ST/KUDL",
    "phone": 9004474718
  },
  {
    "name": "Vishal Harmalkar",
    "designation": "JE/S&T/SWV",
    "phone": 9004474429
  },
  {
    "name": "V M Shirke",
    "designation": "JE/MNI/Project",
    "phone": 9004474710
  },
  {
    "name": "V P Suvare",
    "designation": "JE/VID/Project",
    "phone": 9004474729
  },
  {
    "name": "JE/Works/KKW",
    "designation": "JE/Works/KKW",
    "phone": 9004474889
  },
  {
    "name": "N R Pawar",
    "designation": "MCM/RM/MNI",
    "phone": 9004474721
  },
  {
    "name": "Omkar Sawant",
    "designation": "MCMRM/VEER",
    "phone": 9004474745
  },
  {
    "name": "Pankaj Tambat",
    "designation": "MCM/RM/SVX",
    "phone": 9004474725
  },
  {
    "name": "A S Shinde",
    "designation": "MCM/ESTM/BOKE",
    "phone": 9004474763
  },
  {
    "name": "P M Pawar",
    "designation": "MCM/ESTM/BOKE",
    "phone": 7410056776
  },
  {
    "name": "J L Dhamane",
    "designation": "MCM/ESTM/RN",
    "phone": 9004474764
  },
  {
    "name": "M R Shinde",
    "designation": "MCM/ESTM/KX/RN",
    "phone": 9004474740
  },
  {
    "name": "P H Kulye",
    "designation": "MCM/RN",
    "phone": 9004474770
  },
  {
    "name": "U K Ghosalkar",
    "designation": "MCM/ESTM/RM/RN",
    "phone": 9004474728
  },
  {
    "name": "P R Salvi",
    "designation": "MCM/ESTM/NIV",
    "phone": 9004474731
  },
  {
    "name": "P D Gundye",
    "designation": "MCM/RM/KKW",
    "phone": 9004474734
  },
  {
    "name": "Manohar H Kadam",
    "designation": "MCM/ESTM/HR/KOL",
    "phone": 7410056771
  },
  {
    "name": "Suchit Khatate",
    "designation": "MCM/ESTM/HR/SVX",
    "phone": 7410056774
  },
  {
    "name": "K S Bhosle",
    "designation": "MCM/ESTM/HR/SVX",
    "phone": 7410056775
  },
  {
    "name": "Prasad Sanap",
    "designation": "ESTM/RM/KOL",
    "phone": 9004474720
  },
  {
    "name": "S N Naikar",
    "designation": "MCM/SOC/KKW",
    "phone": 7410056779
  },
  {
    "name": "D D Chirekar",
    "designation": "MCM/HR/SNDD",
    "phone": 7410056780
  },
  {
    "name": "D P More",
    "designation": "ESTM/LR/MNI",
    "phone": 9004474744
  },
  {
    "name": "Mahendra Patil",
    "designation": "ESTM/II/SAPE",
    "phone": 7410056772
  },
  {
    "name": "Bhushan Dhangade",
    "designation": "ESTM/RM/KFD",
    "phone": 9004474722
  },
  {
    "name": "U M Jogalekar",
    "designation": "ESTM/RM/VINH",
    "phone": 9004474746
  },
  {
    "name": "Ajit Dhotre",
    "designation": "ESTM/RM/DWV",
    "phone": 9004474748
  },
  {
    "name": "Vinayak Hambir",
    "designation": "ESTM/RM/KLBN",
    "phone": 7410056773
  },
  {
    "name": "S V Kadam",
    "designation": "ESTMI/RM/KHED",
    "phone": 9004474723
  },
  {
    "name": "Mahesh Kadam",
    "designation": "ESTMII/RM/ANO",
    "phone": 9004474749
  },
  {
    "name": "Reshma Chiplunkar",
    "designation": "ESTMII/RM/CHI",
    "phone": 9004474724
  },
  {
    "name": "Sachin Khedekar",
    "designation": "ESTM/RM/KMAH",
    "phone": 9004474760
  },
  {
    "name": "Manoj Mhaskar",
    "designation": "ESTM/RM/AVRD",
    "phone": 9004474761
  },
  {
    "name": "R M Bhojane",
    "designation": "ESTM III/KDVI",
    "phone": 9004474454
  },
  {
    "name": "R D Ghotane",
    "designation": "ESTMII/RM/SGR",
    "phone": 9004474727
  },
  {
    "name": "Chetan Ghadashi",
    "designation": "ESTM/RM/UKC",
    "phone": 9004474762
  },
  {
    "name": "Ajinkya Gaikwad",
    "designation": "ESTM/TP/RN",
    "phone": 9004474739
  },
  {
    "name": "Dinesh Logade",
    "designation": "ESTMI/RM/RN",
    "phone": 9004474726
  },
  {
    "name": "J L Kadam",
    "designation": "ESTM/RM/ADVI",
    "phone": 9004474730
  },
  {
    "name": "V V Jadhav",
    "designation": "ESTM/VRLI",
    "phone": 7410056777
  },
  {
    "name": "S R Shankeshwari",
    "designation": "ESTM/RM/VID",
    "phone": 9004474732
  },
  {
    "name": "Dinesh Padhye",
    "designation": "ESTMII/RM/RAJP",
    "phone": 9004474733
  },
  {
    "name": "Dinesh Sawant",
    "designation": "ESTM/II/KRPN",
    "phone": 7410056778
  },
  {
    "name": "C S Dingnkar",
    "designation": "ESTMII/RM/VBW",
    "phone": 9004474735
  },
  {
    "name": "Nilesh Thakar",
    "designation": "ESTM/II/ACRN",
    "phone": 9004474769
  },
  {
    "name": "Kalpesh K Palkar",
    "designation": "ESTMII/RM/NAN",
    "phone": 9004474765
  },
  {
    "name": "U V Warang",
    "designation": "ESTM/RM/SNDD",
    "phone": 9004474766
  },
  {
    "name": "Santosh Kumbhar",
    "designation": "ESTMII/RM/KUDL",
    "phone": 9004474736
  },
  {
    "name": "Gurunath Vilas Jethe",
    "designation": "ESTM/RM/ZARAP",
    "phone": 9004474767
  },
  {
    "name": "Prasad K Ludabe",
    "designation": "ESTM/RM/SWV",
    "phone": 9004474737
  },
  {
    "name": "Yashawant Khajanekar",
    "designation": "ESTMI/RM/MADR",
    "phone": 9004474768
  },
  {
    "name": "A A Salunke",
    "designation": "ESTM-SOC/KKW",
    "phone": 7410056781
  },
  {
    "name": "ESTM III/RM/KOL",
    "designation": "ESTM III/RM/KOL",
    "phone": 7410056782
  },
  {
    "name": "Supriya Waphilkar",
    "designation": "ESTM III/RM/VEER",
    "phone": 7410056783
  },
  {
    "name": "Gyanprasad Acharya",
    "designation": "ESTM/INP",
    "phone": 7410056784
  },
  {
    "name": "Nandkishor Tambe",
    "designation": "ESTM III/RM/KHED",
    "phone": 7410056785
  },
  {
    "name": "J K Mullaji",
    "designation": "ESTM III/RM/KMAH",
    "phone": 7410056787
  },
  {
    "name": "M M Kadam",
    "designation": "ESTM III/RM/SGR",
    "phone": 7410056788
  },
  {
    "name": "Ramchandra B Salvi",
    "designation": "ESTM III/RM-2/RN",
    "phone": 7410056789
  },
  {
    "name": "ARMV/RN",
    "designation": "ESTM III/RN",
    "phone": 7410056791
  },
  {
    "name": "ESTM III/RM/RN",
    "designation": "ESTM III/RM/RN",
    "phone": 7410056792
  },
  {
    "name": "Sachin Mandavkar",
    "designation": "ESTM/II/HR/VID",
    "phone": 9004474439
  },
  {
    "name": "Ketan Pandere",
    "designation": "ESTM/III//HR/RAJP",
    "phone": 7410056793
  },
  {
    "name": "Nagesh B Mishal",
    "designation": "ESTM III/RM/VBW",
    "phone": 7410056794
  },
  {
    "name": "ESTM III/RM/KUDL",
    "designation": "ESTM III/RM/KUDL",
    "phone": 7410056795
  },
  {
    "name": "Vishwanath Karande",
    "designation": "ESTM III/RM/SWV",
    "phone": 7410056796
  },
  {
    "name": "R V Kase",
    "designation": "ESTMIII/GNO",
    "phone": 8766587863
  },
  {
    "name": "Santosh Kumbhar",
    "designation": "SA/KKW",
    "phone": 9004474738
  },
  {
    "name": "ARMV/RN",
    "designation": "ARMV/RN",
    "phone": 8010903421
  },
  {
    "name": "ARMV/RN",
    "designation": "ARMV/RN",
    "phone": 8010903422
  },
  {
    "name": "ARMV/RN",
    "designation": "ARMV/RN",
    "phone": 9004474857
  },
  {
    "name": "Raju Choudhary",
    "designation": "RSO/RN",
    "phone": 9004474451
  },
  {
    "name": "Ravi Prakash",
    "designation": "SFC/RN",
    "phone": 9004474885
  },
  {
    "name": "RN Control",
    "designation": "Controller",
    "phone": 9004447999
  },
  {
    "name": "Neela Selvan",
    "designation": "Dy CMM/RN",
    "phone": 9004474409, isHOD: true
  },
  {
    "name": "CDMS/RN",
    "designation": "CDMS/RN",
    "phone": 9004474996
  },
  {
    "name": "D G Sawant",
    "designation": "SA/RN",
    "phone": 9004474995
  },
  {
    "name": "N S Gode",
    "designation": "OA/Store",
    "phone": 9004474997
  },
  {
    "name": "Joseph E Goerge",
    "designation": "ED(SP & BD)/MAO",
    "phone": 9004476707, isHOD: true
  },
  {
    "name": "Ravindra Kamble",
    "designation": "CPM (SP&BD)/MAO",
    "phone": 9225175948, isHOD: true
  },
  {
    "name": "Baban Ghatge",
    "designation": "DGM (PR,PLG &BD)/MAO",
    "phone": 9004477508, isHOD: true
  },
  {
    "name": "G Rajkumar",
    "designation": "STM/Projects/MAO",
    "phone": 9004477511, isHOD: true
  },
  {
    "name": "Jacinta Sequeira",
    "designation": "PS to ED (SP&BD)/MAO",
    "phone": 9834161081
  },
  {
    "name": "Surya Shekar",
    "designation": "INST/MAO",
    "phone": 9004476215
  },
  {
    "name": "Ashok Patil",
    "designation": "INST/MAO",
    "phone": 9004476216
  },
  {
    "name": "Wilson Vaz",
    "designation": "INST/MAO",
    "phone": 7400408445
  },
  {
    "name": "Rajeesh Raj",
    "designation": "CCC/MAO",
    "phone": 9004479329
  },
  {
    "name": "Yunus M",
    "designation": "INST/MAO",
    "phone": 9004476886
  },
  {
    "name": "Dayanand Gosavi",
    "designation": "OS/KRA/MAO",
    "phone": 9004476731
  },
  {
    "name": "Dastageer Ahmmed",
    "designation": "Driver-I/MAO",
    "phone": 9004476732
  },
  {
    "name": "Vasanth Dewadiga",
    "designation": "RHKH/KRA/MAO",
    "phone": 9004477897
  },
  {
    "name": "Pundalik Saraf",
    "designation": "Vehicle Driver -1/MAO",
    "phone": 9834161085
  },
  {
    "name": "Rajendra Nagvekar",
    "designation": "Vehicle Driver -3/MAO",
    "phone": 9834161088
  },
  {
    "name": "Kaushik Patro",
    "designation": "Banglow Peon/MAO",
    "phone": 9834161089
  },
  {
    "name": "Tulsidas Gaonkar",
    "designation": "JCW/MAO",
    "phone": 8080526563
  },
  {
    "name": "KR Gazette(APRO/MAO)",
    "designation": "News letter",
    "phone": 9004476726
  },
  {
    "name": "Girish Rahalkar",
    "designation": "ASO/RN",
    "phone": 7400408480
  },
  {
    "name": "Ragesh K",
    "designation": "SFC/SL",
    "phone": 7400408485
  },
  {
    "name": "Santosh S Naik",
    "designation": "SR AA/MAO",
    "phone": 9004476430
  },
  {
    "name": "Shaikh Zeelan",
    "designation": "SR AA/MAO",
    "phone": 9004476727
  },
  {
    "name": "Satish Dhuri",
    "designation": "Hindi Translator",
    "phone": 9004478407
  },
  {
    "name": "Syed Nurani",
    "designation": "Dy CMM/MAO",
    "phone": 9004477509, isHOD: true
  },
  {
    "name": "Shrikant S Gawas",
    "designation": "CDMS/MAO",
    "phone": 9004476491
  },
  {
    "name": "G A Bashakunji",
    "designation": "DMS/MAO",
    "phone": 9004476492
  },
  {
    "name": "Anita Naik",
    "designation": "OS/STORE/MAO",
    "phone": 9834161078
  },
  {
    "name": "Laxminarayana Naik",
    "designation": "SA/MAO",
    "phone": 9834161079
  },
  {
    "name": "Ganesh Samanth",
    "designation": "Sr RTM/MAO",
    "phone": 9004477510, isHOD: true
  },
  {
    "name": "Govardhan Meena",
    "designation": "ATM/TOK",
    "phone": 9004476735
  },
  {
    "name": "SRCOMSUP/MAO",
    "designation": "SRCOMSUP/MAO",
    "phone": 9004476081
  },
  {
    "name": "Madhukumar Shetty",
    "designation": "CS/MAO",
    "phone": 9004476082
  },
  {
    "name": "Krishnaram G",
    "designation": "CS/MAO",
    "phone": 9004476083
  },
  {
    "name": "Manjunath D",
    "designation": "CS/MAO",
    "phone": 9004476085
  },
  {
    "name": "Upendra Rao",
    "designation": "CS/KAWR",
    "phone": 9004476086
  },
  {
    "name": "Anoop G Pendnekar",
    "designation": "SR CS/RN",
    "phone": 9004476090
  },
  {
    "name": "Vinay V Gaonkar",
    "designation": "CS/MAO",
    "phone": 9004476129
  },
  {
    "name": "Mahesh Naik",
    "designation": "CS/KAWR",
    "phone": 9004476798
  },
  {
    "name": "Prashant B Naik",
    "designation": "CS/MAO",
    "phone": 9004476730
  },
  {
    "name": "Shubhada Desai",
    "designation": "CS/MAO",
    "phone": 9834161091
  },
  {
    "name": "UTS /Control/MAO",
    "designation": "UTS /Ctrl/MAO",
    "phone": 9373162760
  },
  {
    "name": "Head TE/MAO",
    "designation": "Head TE/MAO",
    "phone": 9226034841
  },
  {
    "name": "Jayraman Nair",
    "designation": "Head TE/MAO",
    "phone": 9226034842
  },
  {
    "name": "Gopalkrishna Salunke",
    "designation": "Head TE/MAO",
    "phone": 9226034843
  },
  {
    "name": "Harkesh Meena",
    "designation": "Head TE/MAO",
    "phone": 9226034844
  },
  {
    "name": "Rajesh Meena",
    "designation": "Head TE/MAO",
    "phone": 9226034845
  },
  {
    "name": "Dilip Hindalekar",
    "designation": "Head TE/MAO",
    "phone": 9226034846
  },
  {
    "name": "Deepak Kerkar",
    "designation": "Head TE/MAO",
    "phone": 9226034847
  },
  {
    "name": "K Varadaraj Shetty",
    "designation": "Head TE/MAO",
    "phone": 9226034848
  },
  {
    "name": "M Gunaseelan",
    "designation": "Head TE/MAO",
    "phone": 9226034849
  },
  {
    "name": "M Ravi",
    "designation": "Head TE/MAO",
    "phone": 9226034850
  },
  {
    "name": "Madhav Naik",
    "designation": "Head TE/MAO",
    "phone": 9226034851
  },
  {
    "name": "Mahesh Bhat",
    "designation": "Head TE/MAO",
    "phone": 9226034852
  },
  {
    "name": "Raja Nair",
    "designation": "Head TE/MAO",
    "phone": 9226034853
  },
  {
    "name": "Rajendra Halarnkar",
    "designation": "Head TE/MAO",
    "phone": 9226034854
  },
  {
    "name": "Rajendra Pai",
    "designation": "Head TE/MAO",
    "phone": 9226034855
  },
  {
    "name": "Robert Monickaswamy",
    "designation": "Head TE/MAO",
    "phone": 9226034856
  },
  {
    "name": "Rohidas Gunagi",
    "designation": "Head TE/MAO",
    "phone": 9226034857
  },
  {
    "name": "Sadashiv Punalekar",
    "designation": "Head TE/MAO",
    "phone": 9226034858
  },
  {
    "name": "D Suresh",
    "designation": "Head TE/MAO",
    "phone": 9226034859
  },
  {
    "name": "Sushant Naik",
    "designation": "Head TE/MAO",
    "phone": 9226034860
  },
  {
    "name": "Vinayak Rane",
    "designation": "Head TE/MAO",
    "phone": 9226034861
  },
  {
    "name": "Vinod Naik",
    "designation": "Head TE/MAO",
    "phone": 9226034862
  },
  {
    "name": "Ajaykumar Roy",
    "designation": "Head TE/MAO",
    "phone": 9226034863
  },
  {
    "name": "Ajay Korgaonkar",
    "designation": "Head TE/MAO",
    "phone": 9226034864
  },
  {
    "name": "Shankar Sawaldesai",
    "designation": "Head TE/MAO",
    "phone": 9226034865
  },
  {
    "name": "Pallab Biswas",
    "designation": "Head TE/MAO",
    "phone": 9226034866
  },
  {
    "name": "Jayraman C Nair",
    "designation": "Head TE/MAO",
    "phone": 7410113249
  },
  {
    "name": "Parashuram Padanakatti",
    "designation": "Sr.TE I/MAO",
    "phone": 9226034867
  },
  {
    "name": "ThimmaRaju Bantanhal",
    "designation": "Sr.TE I/MAO",
    "phone": 9226034868
  },
  {
    "name": "B Venkatesulu",
    "designation": "Sr.TE I/MAO",
    "phone": 9226034869
  },
  {
    "name": "Sampath Raju",
    "designation": "Sr.TE I/MAO",
    "phone": 9226034870
  },
  {
    "name": "Santosh Shetiya",
    "designation": "Sr.TE I/MAO",
    "phone": 9226034871
  },
  {
    "name": "Mohan Devadiga",
    "designation": "Sr.TE I/MAO",
    "phone": 9226034872
  },
  {
    "name": "Nagaraj Gouda",
    "designation": "Sr.TE I/MAO",
    "phone": 9226034873
  },
  {
    "name": "Sanjay Fadte",
    "designation": "Sr TE I/MAO",
    "phone": 9226034874
  },
  {
    "name": "Prashant Patgar",
    "designation": "Sr.TE I/MAO",
    "phone": 9226034875
  },
  {
    "name": "Vinayak Karki",
    "designation": "Sr.TE I/MAO",
    "phone": 9226034876
  },
  {
    "name": "Anant Shanbhag",
    "designation": "Sr.TE I/MAO",
    "phone": 9226034877
  },
  {
    "name": "Gajanana Achary",
    "designation": "Sr TE I/MAO",
    "phone": 9226034878
  },
  {
    "name": "Raghavendra Gaonkar",
    "designation": "Sr.TE I/MAO",
    "phone": 9226034879
  },
  {
    "name": "Subhas Gaonkar",
    "designation": "Sr.TE I/MAO",
    "phone": 9226034880
  },
  {
    "name": "Surendra Gaonkar",
    "designation": "Sr.TE I/MAO",
    "phone": 9226034881
  },
  {
    "name": "Shridhar Naik",
    "designation": "Sr TE I/MAO",
    "phone": 9226034882
  },
  {
    "name": "Vivek Gawas",
    "designation": "Sr.TE I/MAO",
    "phone": 9226034883
  },
  {
    "name": "Sandeep Gaonkar",
    "designation": "Sr.TE I/MAO",
    "phone": 9226034884
  },
  {
    "name": "Mahendra Gaonkar",
    "designation": "Sr TE I/MAO",
    "phone": 9226034885
  },
  {
    "name": "Anil Gaonkar",
    "designation": "Sr.TE I/MAO",
    "phone": 9226034886
  },
  {
    "name": "AshwinKumar Kauthankar",
    "designation": "Sr.TE I/MAO",
    "phone": 9226034887
  },
  {
    "name": "Prashant Patgar",
    "designation": "TE/MAO",
    "phone": 9226036223
  },
  {
    "name": "Rajesh Redkar",
    "designation": "TE/MAO",
    "phone": 9226036224
  },
  {
    "name": "Meghashyam Gaude",
    "designation": "TE/MAO",
    "phone": 9226036225
  },
  {
    "name": "Goverdhan Fadte",
    "designation": "TE/MAO",
    "phone": 9226036226
  },
  {
    "name": "Prashantha Kumar",
    "designation": "TE/MAO",
    "phone": 9226036227
  },
  {
    "name": "Santosh Sawal Desai",
    "designation": "TE/MAO",
    "phone": 9226036228
  },
  {
    "name": "Krishna Velip",
    "designation": "TE/MAO",
    "phone": 9226036229
  },
  {
    "name": "Nagaraj K Naik",
    "designation": "TE/MAO",
    "phone": 9226036230
  },
  {
    "name": "Dayananda Shetty",
    "designation": "TE/MAO",
    "phone": 9226036231
  },
  {
    "name": "Rupesh Parwar",
    "designation": "TE/MAO",
    "phone": 9226036232
  },
  {
    "name": "Athish M",
    "designation": "Jr.TE/MAO",
    "phone": 9226036233
  },
  {
    "name": "Padmakar Pawar",
    "designation": "TE/CA-MAO",
    "phone": 9225191401
  },
  {
    "name": "Poornananand Naik",
    "designation": "TE/CA-MAO",
    "phone": 9225191402
  },
  {
    "name": "Aarti Desai",
    "designation": "TE/CA-MAO",
    "phone": 9225191403
  },
  {
    "name": "Vasant Devadiga",
    "designation": "TE/CA-MAO",
    "phone": 9225191404
  },
  {
    "name": "Vinad Billava",
    "designation": "TE/CA-MAO",
    "phone": 9225191405
  },
  {
    "name": "Kiran Devadiga",
    "designation": "TE/CA-MAO",
    "phone": 9225191406
  },
  {
    "name": "Rekha Koraga",
    "designation": "TE/CA-MAO",
    "phone": 9225191407
  },
  {
    "name": "Laxman S Parwar",
    "designation": "TE/CA-MAO",
    "phone": 9225191408
  },
  {
    "name": "Nagesh S Gonda",
    "designation": "TE/CA-MAO",
    "phone": 9225191409
  },
  {
    "name": "K Udaya Naik",
    "designation": "TE/CA-MAO",
    "phone": 9225191410
  },
  {
    "name": "RajatKumar Fernandes",
    "designation": "TE/CA-MAO",
    "phone": 9225191411
  },
  {
    "name": "Anusha Shetty",
    "designation": "TE/CA-MAO",
    "phone": 9225191412
  },
  {
    "name": "CCTV Control/MAO",
    "designation": "CCTV Ctrl/MAO",
    "phone": 9004476210
  },
  {
    "name": "Parcel Office/MAO",
    "designation": "Parcel Office/MAO",
    "phone": 9004476081
  },
  {
    "name": "Commercial Office VEN",
    "designation": "Commercial office VEN",
    "phone": 9004476084
  },
  {
    "name": "RSC/MAO",
    "designation": "RSC/MAO",
    "phone": 9004477506
  },
  {
    "name": "RPF/OFF/THVM",
    "designation": "RPF/OFF/THVM",
    "phone": 9004476061
  },
  {
    "name": "RPF/OFF /MAO",
    "designation": "RPF/OFF /MAO",
    "phone": 9004476063
  },
  {
    "name": "R V Lokhande",
    "designation": "SIPF/MAO",
    "phone": 9004476062
  },
  {
    "name": "Surjeet Kumar",
    "designation": "ASI/MAO",
    "phone": 9004476064
  },
  {
    "name": "Vinod Mishra",
    "designation": "IPF/MAO",
    "phone": 9004476065
  },
  {
    "name": "Mohammad Asif",
    "designation": "IPF/MAO",
    "phone": 9004476066
  },
  {
    "name": "M P Singh",
    "designation": "SIPF/THVM",
    "phone": 9004476089
  },
  {
    "name": "Aparna S Kuvelkar",
    "designation": "SA(IT)/KRMI",
    "phone": 9004476048
  },
  {
    "name": "Ram T Bhute",
    "designation": "SPT1/MAO",
    "phone": 9004476049
  },
  {
    "name": "Shridhar Avabharath",
    "designation": "JR SP/MAO",
    "phone": 9004476017
  },
  {
    "name": "Vasudev Shettigar",
    "designation": "JR SP/MAO",
    "phone": 9004476018
  },
  {
    "name": "M. David",
    "designation": "AEE/MAO",
    "phone": 7400408442, isHOD: true
  },
  {
    "name": "Shubham Sinha",
    "designation": "SEE/MAO",
    "phone": 9004477502, isHOD: true
  },
  {
    "name": "Shridhar G Bhat",
    "designation": "SSE/PSI/MAO",
    "phone": 9004476672
  },
  {
    "name": "K C Josheph",
    "designation": "SSE/AC/MAO",
    "phone": 9004476674
  },
  {
    "name": "Maheshkumar K Patil",
    "designation": "SSE/AM/MAO",
    "phone": 9004476676
  },
  {
    "name": "Hiresh J Palkar",
    "designation": "SSE/AM/VEN",
    "phone": 9004476679
  },
  {
    "name": "Tomy Jacob M",
    "designation": "SSE/TL/MAO",
    "phone": 9004476685
  },
  {
    "name": "Rohidas H Naik",
    "designation": "JE/OHE/KRMI",
    "phone": 9004476673
  },
  {
    "name": "M B Pareeshwad",
    "designation": "JE/TL/MAO",
    "phone": 9004476675
  },
  {
    "name": "Irshad R Belgaumkar",
    "designation": "JE/AC/MAO",
    "phone": 9004476680
  },
  {
    "name": "Mahesh Naik",
    "designation": "JE/AC/MAO",
    "phone": 7410118507
  },
  {
    "name": "Ramanath Velip",
    "designation": "JE/TVCR/CNO",
    "phone": 9004476686
  },
  {
    "name": "Vishwajit",
    "designation": "JE/AM/MAO",
    "phone": 7400408443
  },
  {
    "name": "Sachin Balaram Kondke",
    "designation": "JE/PSI&GS/KRMI",
    "phone": 7410117192
  },
  {
    "name": "Azeemkhan Pathan",
    "designation": "JE/AM/VEN",
    "phone": 8080526565
  },
  {
    "name": "Train Light system",
    "designation": "RA/C/MAO",
    "phone": 9004476681
  },
  {
    "name": "Caetano Jose Vaz",
    "designation": "MCM/EL/KRMI",
    "phone": 7410117824
  },
  {
    "name": "Valete Vaz",
    "designation": "MCM/EL/MAO",
    "phone": 7410117257
  },
  {
    "name": "Shekhara Naik",
    "designation": "TEC/EL/VEN",
    "phone": 7420030840
  },
  {
    "name": "Shubham Santhoshe",
    "designation": "TEC/EL/VEN",
    "phone": 7410117014
  },
  {
    "name": "Viresh M Silimchand",
    "designation": "TEC/EL/VEN",
    "phone": 7410117081
  },
  {
    "name": "Dombayya K",
    "designation": "TEC/EL/VEN",
    "phone": 7410117110
  },
  {
    "name": "Swapnil Prakash Pawar",
    "designation": "TEC/EL/VEN",
    "phone": 7410117129
  },
  {
    "name": "Bisu S Pal",
    "designation": "TEC/EL/VEN",
    "phone": 7410117159
  },
  {
    "name": "M R Talawar",
    "designation": "TEC/EL/VEN",
    "phone": 7410117161
  },
  {
    "name": "Shriram Munde",
    "designation": "TEC/EL/VEN",
    "phone": 7410117211
  },
  {
    "name": "Mohandas Tatpati",
    "designation": "TEC/EL/MAO",
    "phone": 7410117325
  },
  {
    "name": "Muttappa Halgatti",
    "designation": "TEC/EL/MAO",
    "phone": 7410117356
  },
  {
    "name": "Socorro Gonsalves",
    "designation": "TEC/EL/MAO",
    "phone": 7410117358
  },
  {
    "name": "Prakash V Shirodkar",
    "designation": "TEC/EL/MAO",
    "phone": 7410117386
  },
  {
    "name": "Rajendra Y Mahale",
    "designation": "TEC/EL/MAO",
    "phone": 7410117393
  },
  {
    "name": "Raviraj",
    "designation": "TEC/EL/MAO",
    "phone": 7410117431
  },
  {
    "name": "Pundalik Shetgaonkar",
    "designation": "TEC/EL/MAO",
    "phone": 7410117595
  },
  {
    "name": "U K Gamare",
    "designation": "TEC/EL/MAO",
    "phone": 7410117681
  },
  {
    "name": "P K Ramesh Kumar",
    "designation": "TEC/EL/MAO",
    "phone": 7410117724
  },
  {
    "name": "Shamba Sonu Gawade",
    "designation": "TEC/EL/MAO",
    "phone": 7410117737
  },
  {
    "name": "Subhash K Bandodkar",
    "designation": "TEC/EL/MAO",
    "phone": 7410117895
  },
  {
    "name": "Anant K Naik",
    "designation": "TEC/EL/MAO",
    "phone": 7410118103
  },
  {
    "name": "Melwind Pereira",
    "designation": "TEC/EL/MAO",
    "phone": 7410118196
  },
  {
    "name": "Dyaneswar F Sarap",
    "designation": "TEC/EL/MAO",
    "phone": 7410118308
  },
  {
    "name": "Hari N Naik",
    "designation": "TEC/EL/MAO",
    "phone": 7410118354
  },
  {
    "name": "Sunil S Haldonkar",
    "designation": "TEC/EL/MAO",
    "phone": 7410118504
  },
  {
    "name": "D A Otwanekar",
    "designation": "TEC/EL/MAO",
    "phone": 7410118694
  },
  {
    "name": "Vinod G Chandavarkar",
    "designation": "TEC/EL/MAO",
    "phone": 7410118891
  },
  {
    "name": "Pramod Kumar Shetty",
    "designation": "TEC/EL/MAO",
    "phone": 7410118917
  },
  {
    "name": "Mahanand Thanekar",
    "designation": "TEC/EL/MAO",
    "phone": 7410118927
  },
  {
    "name": "Chandreswar S Naik",
    "designation": "TEC/EL/MAO",
    "phone": 7410119046
  },
  {
    "name": "Shabir Khan",
    "designation": "TEC/EL/MAO",
    "phone": 7410119069
  },
  {
    "name": "Ratnakar P",
    "designation": "TEC/EL/MAO",
    "phone": 7410119070
  },
  {
    "name": "Ganesh M Gaonkar",
    "designation": "TEC/EL/MAO",
    "phone": 7410119164
  },
  {
    "name": "Vivek Poojary",
    "designation": "TECH/III/PSI & GS/MAO",
    "phone": 9226513931
  },
  {
    "name": "Nagraj Hanumanth Ambig",
    "designation": "TECH/III/PSI & GS/MAO",
    "phone": 9226513932
  },
  {
    "name": "Gautam Ashok Tikde",
    "designation": "TECH/III/PSI & GS/MAO",
    "phone": 9226513933
  },
  {
    "name": "Karan R ingle",
    "designation": "TECH/III/MAO",
    "phone": 9226513934
  },
  {
    "name": "Nikhil Dulichand Gajabhiye",
    "designation": "TECH/III/TL/MAO",
    "phone": 9226513935
  },
  {
    "name": "Pandurang Rasalay",
    "designation": "Store Assistant/MAO",
    "phone": 9226513936
  },
  {
    "name": "Sandesh Telmore",
    "designation": "TECH/III/TL/MAO",
    "phone": 9226513937
  },
  {
    "name": "Kiran Haral",
    "designation": "TECH/III/KRMI",
    "phone": 9226513938
  },
  {
    "name": "A S Shaikh",
    "designation": "TECH/III/KRMI",
    "phone": 9226513939
  },
  {
    "name": "Kailash H Wanve",
    "designation": "TECH/III/KRMI",
    "phone": 9226513940
  },
  {
    "name": "Narayan Gajanan Khadase",
    "designation": "TECH/III/KRMI",
    "phone": 9226513941
  },
  {
    "name": "Sameer Gawas",
    "designation": "TECH/III/KRMI",
    "phone": 9226513942
  },
  {
    "name": "Tejas Tambe",
    "designation": "TECH/III/OHE/KRMI",
    "phone": 9226513943
  },
  {
    "name": "Sanket R Bedre",
    "designation": "TECH/III/KRMI",
    "phone": 9226513944
  },
  {
    "name": "Nikhil D Mangrulkar",
    "designation": "TECH/III/KRMI",
    "phone": 9226513945
  },
  {
    "name": "Ankush Baburao Ingole",
    "designation": "TECH/III/KRMI",
    "phone": 9226513946
  },
  {
    "name": "Siddesh Chandrakant Dalvi",
    "designation": "JE/KRMI",
    "phone": 9226513947
  },
  {
    "name": "Sagar R Illarkar",
    "designation": "TECH/III/KRMI",
    "phone": 9226513948
  },
  {
    "name": "Escalator MAO",
    "designation": "Escalator MAO",
    "phone": 7410118238
  },
  {
    "name": "Dr Vinod Kantode",
    "designation": "Dy CMO/MAO",
    "phone": 9004477505
  },
  {
    "name": "Dr Shirish Madar",
    "designation": "Dy CMO/VEN",
    "phone": 9004477515
  },
  {
    "name": "Shrilatha S Pangala",
    "designation": "NUR/UD",
    "phone": 9004476052
  },
  {
    "name": "Hezel J S Fernandes",
    "designation": "SR NUR/MAO",
    "phone": 9004476053
  },
  {
    "name": "Ravindra N Kamath",
    "designation": "MPHW/MAO",
    "phone": 9004476054
  },
  {
    "name": "Sawant M Atmaram",
    "designation": "MPHW/MAO",
    "phone": 9004476055
  },
  {
    "name": "Manoj V Vengurlekar",
    "designation": "MPHW/VEN",
    "phone": 9004476056
  },
  {
    "name": "M M Murugan",
    "designation": "MPHW/VEN",
    "phone": 9004476057
  },
  {
    "name": "N K Deshbhandari",
    "designation": "MPHW/KAWR",
    "phone": 9004476058
  },
  {
    "name": "Arun R Ghanekar",
    "designation": "MPHW/MAO",
    "phone": 9004476059
  },
  {
    "name": "Manjunath B Naik",
    "designation": "MPHW/VEN",
    "phone": 9004476026
  },
  {
    "name": "R H Chavan",
    "designation": "MPHW/MAO",
    "phone": 9004476027
  },
  {
    "name": "Akshay Kaladkar",
    "designation": "SSTE/MAO",
    "phone": 9004477507
  },
  {
    "name": "Sunil Gaonkar",
    "designation": "SSE/S&T/VEN",
    "phone": 9004474450
  },
  {
    "name": "Anton J Fansekar",
    "designation": "STA/MAO",
    "phone": 9004476080
  },
  {
    "name": "Sajan Shirwadkar",
    "designation": "SSE/S&T/MAO",
    "phone": 9004476071
  },
  {
    "name": "Hitesh Pilgaonkar",
    "designation": "JE/S&T/THVM",
    "phone": 9004474449
  },
  {
    "name": "Simon Colaco",
    "designation": "JE/S&T/RM/MAO",
    "phone": 9004476078
  },
  {
    "name": "Romeo D'Cruz",
    "designation": "JE/S&T/LR/MAO",
    "phone": 9356922314
  },
  {
    "name": "Sagar Talekar",
    "designation": "JE/S&T/RM/VEN",
    "phone": 9004476072
  },
  {
    "name": "Manjunath Madolkar",
    "designation": "JE/NW/DMC/MAO",
    "phone": 9004476075
  },
  {
    "name": "Athmaram Morajakar",
    "designation": "JE/S&T/HR/VEN",
    "phone": 9004476070
  },
  {
    "name": "Mahesh Gond",
    "designation": "JE/S&T/CNO",
    "phone": 9004476079
  },
  {
    "name": "Mahesh Parab",
    "designation": "MCM/PERN",
    "phone": 9004478981
  },
  {
    "name": "Pratap B Gad",
    "designation": "MCM/HR/PERN",
    "phone": 9004474445
  },
  {
    "name": "Rupesh S Parwar",
    "designation": "ESTM II /THVM",
    "phone": 9004476069
  },
  {
    "name": "Balakrishna Kerkar",
    "designation": "MCM/ESTM/KRMI",
    "phone": 9004478982
  },
  {
    "name": "Digambar Jalmi",
    "designation": "ESTM/II/RM/-1/VEN",
    "phone": 9004478983
  },
  {
    "name": "Shikant Kannake",
    "designation": "ESTM/III/RM/VEN",
    "phone": 7420030771
  },
  {
    "name": "R Karapurkar",
    "designation": "MCM/ESTM/RM/VEN",
    "phone": 7420030772
  },
  {
    "name": "Gourish Madkekar",
    "designation": "ESTM/II/LR/VEN",
    "phone": 7420030773
  },
  {
    "name": "Siddesh Sherlekar",
    "designation": "ESTM/II/MJO",
    "phone": 9004478984
  },
  {
    "name": "Digambar Bhuvad",
    "designation": "ESTM/III/RM/MJO",
    "phone": 7420030777
  },
  {
    "name": "Moorthi Naik",
    "designation": "ESTM/II/RM-1/MAO",
    "phone": 9004476074
  },
  {
    "name": "Sunil P Mayakar",
    "designation": "MCM/KX/MAO",
    "phone": 9004476077
  },
  {
    "name": "Pundalik R Gawade",
    "designation": "MCM/ESTM/I/MAO",
    "phone": 9004478987
  },
  {
    "name": "Nilesh Ramnathkar",
    "designation": "ESTM/II/MAO",
    "phone": 7400408474
  },
  {
    "name": "Shankar Desai",
    "designation": "ESTM/III/RM2/MAO",
    "phone": 7420030774
  },
  {
    "name": "Chetan Sawakare",
    "designation": "ESTM/III//MAO",
    "phone": 7420030775
  },
  {
    "name": "Vijay Prajapati",
    "designation": "ESTM/III//MAO",
    "phone": 7420030776
  },
  {
    "name": "D Devendar",
    "designation": "ESTMI/RM-I @Nepal",
    "phone": 9004478985
  },
  {
    "name": "Rajesh Muli",
    "designation": "ESTM/BLLI",
    "phone": 9004474452
  },
  {
    "name": "Sudesh Komarpant",
    "designation": "ESTM II /CNO",
    "phone": 9004478986
  },
  {
    "name": "Vishal Tupe",
    "designation": "ESTM III/VEN",
    "phone": 7400408475
  },
  {
    "name": "Somanath Balekar",
    "designation": "MCM/ESTM/DMC/MAO",
    "phone": 9004478076
  },
  {
    "name": "Pernem",
    "designation": "PERN Station FCT Phone",
    "phone": 9004476327
  },
  {
    "name": "Thivim",
    "designation": "THVM Station FCT Phone",
    "phone": 9004476041
  },
  {
    "name": "Karmali",
    "designation": "KRMI Station FCT Phone",
    "phone": 9004476042
  },
  {
    "name": "Balli",
    "designation": "BLLI Station FCT Phone",
    "phone": 9356922312
  },
  {
    "name": "Loliem",
    "designation": "LOL Station FCT Phone",
    "phone": 9356922310
  },
  {
    "name": "Shubhod Kumar",
    "designation": "SEN/MAO",
    "phone": 9004477513
  },
  {
    "name": "Amithkumar Yadav",
    "designation": "SSE/PWAY/MAO",
    "phone": 9004476462
  },
  {
    "name": "Shivanand karsari",
    "designation": "SSE/W/MAO",
    "phone": 9004476480
  },
  {
    "name": "P Ravindranath",
    "designation": "SSE/DD/MAO",
    "phone": 9004476494
  },
  {
    "name": "Babu Kolekar",
    "designation": "SSE/MMG/VEN",
    "phone": 9004476482
  },
  {
    "name": "Gangadar Naik",
    "designation": "SSE/Bridge/MAO",
    "phone": 9004476324
  },
  {
    "name": "M P Bendre",
    "designation": "SSE/SPW/MAO",
    "phone": 9356922309
  },
  {
    "name": "Narendra Sawanth",
    "designation": "SSE/DD/MAO",
    "phone": 9004476488
  },
  {
    "name": "Shrikant Salunkhe",
    "designation": "SSE/SW/MAO",
    "phone": 9004477514
  },
  {
    "name": "Nagaraj Rao",
    "designation": "JE/PWAY/THVM",
    "phone": 9004476476
  },
  {
    "name": "Gujjari P Prakash",
    "designation": "JE/W/KKW",
    "phone": 9004476585
  },
  {
    "name": "Jayashankaran",
    "designation": "JE/USFD/MAO",
    "phone": 9004476479
  },
  {
    "name": "Mahesh G Hegde",
    "designation": "SSE/PWAY/MAO",
    "phone": 9004476485
  },
  {
    "name": "Abhay P Dhuri",
    "designation": "JE/DD/MAO",
    "phone": 9004476481
  },
  {
    "name": "Dinesh Morajker",
    "designation": "APWS/VEN",
    "phone": 9004476228
  },
  {
    "name": "Cynthy N",
    "designation": "CHOS/MAO",
    "phone": 9004476067
  },
  {
    "name": "Vishwas K Korgaonkar",
    "designation": "PWS/PERN",
    "phone": 9004476487
  },
  {
    "name": "Pravin Narahari Malik",
    "designation": "PWS/KRMI",
    "phone": 9004476489
  },
  {
    "name": "Anthony D'souza",
    "designation": "PWS/MAO",
    "phone": 9004476490
  },
  {
    "name": "Sarvesh P Veralekar",
    "designation": "JTA/MAO",
    "phone": 9004476389
  },
  {
    "name": "RMV/VEN",
    "designation": "S/PWAY/MAO",
    "phone": 9004476423
  },
  {
    "name": "Prashant W Nerurkar",
    "designation": "SR CL/MAO",
    "phone": 9004476457
  },
  {
    "name": "Stanly J Rodrigues",
    "designation": "SUP PWAY/BLLI",
    "phone": 9004476477
  },
  {
    "name": "Anand Gaonkar",
    "designation": "PWS/CNO",
    "phone": 9004476595
  },
  {
    "name": "K A Shaikh Khuddus",
    "designation": "APWS/VEN",
    "phone": 9004476609
  },
  {
    "name": "Y V Lambani",
    "designation": "TSM/MAO",
    "phone": 7410111805
  },
  {
    "name": "Rohidas A Manjrekar",
    "designation": "TSM/CNO",
    "phone": 7410111819
  },
  {
    "name": "Ashok Tukaram Naik",
    "designation": "TSM/CNO",
    "phone": 7410112119
  },
  {
    "name": "Surendra Kadwadkar",
    "designation": "TSM/KAWR",
    "phone": 7410112131
  },
  {
    "name": "Jaynath V Marshelkar",
    "designation": "TSM/MAO",
    "phone": 7410112180
  },
  {
    "name": "Kishor Bandekar",
    "designation": "TSM/KAWR",
    "phone": 7410112290
  },
  {
    "name": "R A Sawant",
    "designation": "TSM/1/PERN",
    "phone": 7410112308
  },
  {
    "name": "Pradeep R Velip",
    "designation": "TSM/BLLI",
    "phone": 7410112540
  },
  {
    "name": "Chandrahas P Gowda",
    "designation": "TSM/HAA",
    "phone": 7410112551
  },
  {
    "name": "H S Padvekar",
    "designation": "TSM/THVM",
    "phone": 7410112718
  },
  {
    "name": "Santosh V Arolkar",
    "designation": "TSM/PERN",
    "phone": 7410112738
  },
  {
    "name": "Ashok M Parvatkar",
    "designation": "TSM/THVM",
    "phone": 7410112741
  },
  {
    "name": "Avinash S Raul",
    "designation": "TSM/KRMI",
    "phone": 7410112855
  },
  {
    "name": "Nagesh Anant Gaonkar",
    "designation": "TSM/THVM",
    "phone": 7410112892
  },
  {
    "name": "Nilesh V Salaskar",
    "designation": "TSM/LOL",
    "phone": 7410112934
  },
  {
    "name": "Tapas A Maity",
    "designation": "TSM/MAO",
    "phone": 7410113064
  },
  {
    "name": "Ginvindray Yadav Gouda",
    "designation": "TSM/GOK",
    "phone": 7410113090
  },
  {
    "name": "Shashikant Gaonkar",
    "designation": "TSM/MAO",
    "phone": 7410113194
  },
  {
    "name": "Haula Molu Gaude",
    "designation": "TSM/VEN",
    "phone": 7410113196
  },
  {
    "name": "Nilesh Gaonkar",
    "designation": "TSM/MAO",
    "phone": 7410113230
  },
  {
    "name": "Rajan Babu",
    "designation": "Sr RME/MAO",
    "phone": 9004477340, isHOD: true
  },
  {
    "name": "Srikant O Shidling",
    "designation": "SME/MAO",
    "phone": 9004477504, isHOD: true
  },
  {
    "name": "D Dhananjaya Varma",
    "designation": "AME/VEN",
    "phone": 9004477342, isHOD: true
  },
  {
    "name": "Gautam Gaude",
    "designation": "AME/VEN",
    "phone": 7400408352, isHOD: true
  },
  {
    "name": "Govardhan Lal Balai",
    "designation": "CLI/MAO",
    "phone": 9004476136
  },
  {
    "name": "Raghu C K",
    "designation": "CLI/MAO",
    "phone": 9004476138
  },
  {
    "name": "Kripan K T",
    "designation": "CLI/SL",
    "phone": 9663468582
  },
  {
    "name": "Jhonsan K P",
    "designation": "CLI/MAO",
    "phone": 9004477578
  },
  {
    "name": "Peter Sequeira F",
    "designation": "CLI/VEN",
    "phone": 9004476493
  },
  {
    "name": "Sudhakaran T V",
    "designation": "CLI/BEL",
    "phone": 9004477562
  },
  {
    "name": "M S Kavitkar",
    "designation": "CLI/MAO",
    "phone": 7400408455
  },
  {
    "name": "P Muralidharan",
    "designation": "CLI/MAO",
    "phone": 9004477793
  },
  {
    "name": "P F Kurade",
    "designation": "CLI/VEN",
    "phone": 9004478134
  },
  {
    "name": "Pankaj Taywade",
    "designation": "SSE/ME/VEN",
    "phone": 9004476323
  },
  {
    "name": "S Kumar R Mahamal",
    "designation": "SSE/ME/VEN",
    "phone": 9004477517
  },
  {
    "name": "C K Anil Kumar",
    "designation": "SSE/ME/VEN",
    "phone": 9004477518
  },
  {
    "name": "Nitin S Padwalkar",
    "designation": "SSE/ME/VEN",
    "phone": 9004477519
  },
  {
    "name": "Y S Gourapur",
    "designation": "SSE/ME/MAO",
    "phone": 9004477552
  },
  {
    "name": "Yamunappa S Madar",
    "designation": "SE/ME/MAO",
    "phone": 9004477590
  },
  {
    "name": "K B Santosh",
    "designation": "SE/ME/MAO",
    "phone": 9004477593
  },
  {
    "name": "Suresh Malgunkar",
    "designation": "SSE/ME/VEN",
    "phone": 9004477778
  },
  {
    "name": "Sameer U Shaikh",
    "designation": "SE/ME/MAO",
    "phone": 9004477786
  },
  {
    "name": "P N Prasannkumar",
    "designation": "SSE/ME/BLP",
    "phone": 9004477772
  },
  {
    "name": "SSE/ME/VEN",
    "designation": "SSE/ME/VEN",
    "phone": 9004478290
  },
  {
    "name": "M D Bharambe",
    "designation": "SSE/ME/SL",
    "phone": 9004479042
  },
  {
    "name": "SSE/ME/VEN",
    "designation": "SSE/ME/VEN",
    "phone": 8080526566
  },
  {
    "name": "Prathmesh Sadmakhe",
    "designation": "SSE/ME/VEN",
    "phone": 7420030660
  },
  {
    "name": "Shubham P Chaudhari",
    "designation": "JE/ME/MAO",
    "phone": 7410118831
  },
  {
    "name": "Ranjit Kherade",
    "designation": "JE/ME/MAO",
    "phone": 7400408228
  },
  {
    "name": "Sundarmurty V",
    "designation": "JE/ME/VEN",
    "phone": 9004476639
  },
  {
    "name": "Babu Thankpapan",
    "designation": "JE/ME/VEN",
    "phone": 9004476659
  },
  {
    "name": "Shridhar patgar",
    "designation": "JE/ME/TOK",
    "phone": 9004476729
  },
  {
    "name": "Naik Videsh Mohan",
    "designation": "JE/ME/VEN",
    "phone": 9004477516
  },
  {
    "name": "Rajendra A Shirke",
    "designation": "JE/ME/VEN",
    "phone": 9004477520
  },
  {
    "name": "Ramkrishna Vijaykumar",
    "designation": "JE/ME/MAO",
    "phone": 9004477589
  },
  {
    "name": "Nitin R Devalakar",
    "designation": "JE/ME/MAO",
    "phone": 9004477654
  },
  {
    "name": "J V Girish",
    "designation": "JE/ME/MAO",
    "phone": 9004477670
  },
  {
    "name": "Umamaheshwar S Bhat",
    "designation": "JE/ME/MAO",
    "phone": 9004477683
  },
  {
    "name": "Santosh V Talekar",
    "designation": "JE/ME/MAO",
    "phone": 9004477770
  },
  {
    "name": "Dhananjay S Kumar",
    "designation": "JE/ME/MAO",
    "phone": 9004477773
  },
  {
    "name": "Ravindra V Naik",
    "designation": "JE/ME/MAO",
    "phone": 9004477779
  },
  {
    "name": "Y H Gosavi",
    "designation": "JE/ME/VEN",
    "phone": 9004477790
  },
  {
    "name": "Anthony D Mello",
    "designation": "JE/ME/VEN",
    "phone": 9004477791
  },
  {
    "name": "Ishwar S Halli",
    "designation": "JE/ME/VEN",
    "phone": 9004477792
  },
  {
    "name": "H G Hegade",
    "designation": "JE/ME/MAO",
    "phone": 7400408452
  },
  {
    "name": "Gitesh Kunkalikar",
    "designation": "JE/ME/VEN",
    "phone": 7400408454
  },
  {
    "name": "Ganeshraj K V",
    "designation": "JE/ME/VEN",
    "phone": 7400408453
  },
  {
    "name": "P C Kurtikar",
    "designation": "JE/ME/VEN",
    "phone": 9004479043
  },
  {
    "name": "Iswar Halli",
    "designation": "JE/VEN",
    "phone": 7420030657
  },
  {
    "name": "S B Barde",
    "designation": "JE/VEN",
    "phone": 7420030658
  },
  {
    "name": "Sudhindra Rao",
    "designation": "JE/ME/BLP",
    "phone": 9004479041
  },
  {
    "name": "M P Darokar",
    "designation": "JE/ME/MAO",
    "phone": 9004479040
  },
  {
    "name": "Videsh Naik",
    "designation": "JE/VEN",
    "phone": 8080526567
  },
  {
    "name": "Prathamesh",
    "designation": "JE/ME/MAO",
    "phone": 9004477865
  },
  {
    "name": "Smt.Rajita P",
    "designation": "OS/VEN",
    "phone": 7420030659
  },
  {
    "name": "Ravi S Rane",
    "designation": "OS/MAO",
    "phone": 9004478050
  },
  {
    "name": "Sherif Bhasha",
    "designation": "MCM (UTV 88H)",
    "phone": 9004476038
  },
  {
    "name": "MCM/VEN",
    "designation": "MCM/VEN",
    "phone": 9004477771
  },
  {
    "name": "R B Rajpurkar",
    "designation": "MCM/MAO",
    "phone": 9356922315
  },
  {
    "name": "Azad Mirajkar",
    "designation": "MCM/VEN",
    "phone": 8080526569
  },
  {
    "name": "Santosh Yadav",
    "designation": "TECH/BLP (AIOBCREA)",
    "phone": 9834161087
  },
  {
    "name": "Mohan B Mokal",
    "designation": "TEC/ME/VEN",
    "phone": 9004476247
  },
  {
    "name": "Pathak Suresh K",
    "designation": "TEC/ME/VEN",
    "phone": 9004476248
  },
  {
    "name": "Shumbham Kambli",
    "designation": "TEC/ME/VEN",
    "phone": 9004476313
  },
  {
    "name": "Vinodkumar S Singh",
    "designation": "TEC/ME/VEN",
    "phone": 9004476316
  },
  {
    "name": "Vinod K Kalgutkar",
    "designation": "TECMI/1/KW",
    "phone": 9004476046
  },
  {
    "name": "L V Lingayat",
    "designation": "TECH/VEN",
    "phone": 9004479045
  },
  {
    "name": "M A Sawant",
    "designation": "TECH/VEN",
    "phone": 9004479044
  },
  {
    "name": "T Seshu Kumar",
    "designation": "TECH/VEN",
    "phone": 9004478053
  },
  {
    "name": "S H Dabhade",
    "designation": "TEC/MAO",
    "phone": 7420030655
  },
  {
    "name": "S K Desai",
    "designation": "TEC/MAO",
    "phone": 7420030656
  },
  {
    "name": "Jitendra Tiwari",
    "designation": "TECH-II/VEN",
    "phone": 8080526570
  },
  {
    "name": "R D Mokal",
    "designation": "TECH-II/VEN",
    "phone": 8080526571
  },
  {
    "name": "P K Anandkumar",
    "designation": "TECH-II/VEN",
    "phone": 8080526572
  },
  {
    "name": "S B Manve",
    "designation": "TECH-II/VEN",
    "phone": 8080526573
  },
  {
    "name": "Sandeep M",
    "designation": "TECH/MAO",
    "phone": 7400408219
  },
  {
    "name": "Ganesh T",
    "designation": "OA/RN",
    "phone": 7400408223
  },
  {
    "name": "Abhay A Morvekar",
    "designation": "CREW MGR/MAO",
    "phone": 9004477581
  },
  {
    "name": "V S Naik",
    "designation": "CREW MGR/MAO",
    "phone": 9004477583
  },
  {
    "name": "Shelly Joseph K",
    "designation": "CREW MGR/MAO",
    "phone": 9004477584
  },
  {
    "name": "Mallikarjun V Umbarji",
    "designation": "CREW MGR/VEN",
    "phone": 9004477806
  },
  {
    "name": "Anoop P A",
    "designation": "LP/MAO",
    "phone": 9004476966
  },
  {
    "name": "Somshekhar N Devadiga",
    "designation": "CREW MGR/MAO",
    "phone": 9004476968
  },
  {
    "name": "Sanmit Palkar",
    "designation": "ALP/VEN",
    "phone": 9004474426
  },
  {
    "name": "Prashant R",
    "designation": "LPG/RN",
    "phone": 7400408235
  },
  {
    "name": "Amol S",
    "designation": "LPG/MAO",
    "phone": 7400408236
  },
  {
    "name": "Keshav.O",
    "designation": "LPG/VEN",
    "phone": 7400408237
  },
  {
    "name": "Sandip Sawal",
    "designation": "LPG/VEN",
    "phone": 7400408238
  },
  {
    "name": "Ravikant Shetty",
    "designation": "LPG/VEN",
    "phone": 7400408239
  },
  {
    "name": "Kiran D Bhandari",
    "designation": "LPG/VEN",
    "phone": 7400408240
  },
  {
    "name": "Nithyananda D",
    "designation": "LPG/VEN",
    "phone": 7400408241
  },
  {
    "name": "Umesh Narayan",
    "designation": "LPG/VEN",
    "phone": 7400408242
  },
  {
    "name": "Narayan Gouda",
    "designation": "LPG/VEN",
    "phone": 7400408243
  },
  {
    "name": "Prajwal Kumar",
    "designation": "LPG/VEN",
    "phone": 7400408244
  },
  {
    "name": "Sandesh Naik",
    "designation": "LPG/VEN",
    "phone": 7400408245
  },
  {
    "name": "Ramchandra Dicholkar",
    "designation": "LPG/VEN",
    "phone": 7400408246
  },
  {
    "name": "Sabaji Haldankar",
    "designation": "LPG/VEN",
    "phone": 7400408247
  },
  {
    "name": "Sanjay M Parab",
    "designation": "LPS/MAO",
    "phone": 7400408248
  },
  {
    "name": "Sudhakar Moolya",
    "designation": "Store/SL",
    "phone": 7400408249
  },
  {
    "name": "Upendra",
    "designation": "LPS/MAO",
    "phone": 7400408250
  },
  {
    "name": "Pradeep Kumar",
    "designation": "LPS/MAO",
    "phone": 7400408251
  },
  {
    "name": "Prasanna P K",
    "designation": "SR ALP/MAO",
    "phone": 7400408252
  },
  {
    "name": "Girish Phayde",
    "designation": "SR ALP/MAO",
    "phone": 7400408253
  },
  {
    "name": "Ishwar D",
    "designation": "SR ALP/MAO",
    "phone": 7400408254
  },
  {
    "name": "Yogesh Bandekar",
    "designation": "SR ALP/MAO",
    "phone": 7400408255
  },
  {
    "name": "Vishwanath",
    "designation": "LPG/VEN",
    "phone": 7400408256
  },
  {
    "name": "Satish G",
    "designation": "LPG/VEN",
    "phone": 7400408257
  },
  {
    "name": "Tulsidas Gonda",
    "designation": "LPG/VEN",
    "phone": 7400408258
  },
  {
    "name": "Raghavendra S",
    "designation": "SR ALP/MAO",
    "phone": 7400408259
  },
  {
    "name": "Prasad Chavan",
    "designation": "SR ALP/MAO",
    "phone": 7400408260
  },
  {
    "name": "Rohan Naik",
    "designation": "SR ALP/MAO",
    "phone": 7400408261
  },
  {
    "name": "Chetan Naik",
    "designation": "SR ALP/MAO",
    "phone": 7400408262
  },
  {
    "name": "Jeetu Netalkar",
    "designation": "SR ALP/MAO",
    "phone": 7400408264
  },
  {
    "name": "C D Pednekar",
    "designation": "SR ALP/MAO",
    "phone": 7400408265
  },
  {
    "name": "Parameshwar",
    "designation": "SR ALP/MAO",
    "phone": 7400408266
  },
  {
    "name": "Apa Dhuri",
    "designation": "SR ALP/MAO",
    "phone": 7400408267
  },
  {
    "name": "Girish D",
    "designation": "SR ALP/MAO",
    "phone": 7400408268
  },
  {
    "name": "Nityanand Naik",
    "designation": "SR ALP/SL",
    "phone": 7400408269
  },
  {
    "name": "Sanjay Kadam",
    "designation": "LPG/VEN",
    "phone": 7400408177
  },
  {
    "name": "Mantu S Fernandes",
    "designation": "Sr ALP/VEN",
    "phone": 7400408179
  },
  {
    "name": "Durgadas Gonda",
    "designation": "SR ALP/MAO",
    "phone": 7400408294
  },
  {
    "name": "Jagadeesh Moger",
    "designation": "LPP/MAO",
    "phone": 9004476385
  },
  {
    "name": "Aggie Vaz",
    "designation": "LPP/MAO",
    "phone": 9004476387
  },
  {
    "name": "S Manjunath",
    "designation": "LPM/MAO",
    "phone": 9004476904
  },
  {
    "name": "Prakashan Mutta",
    "designation": "LPM/MAO",
    "phone": 9004476910
  },
  {
    "name": "Jomon P M",
    "designation": "LPM/MAO",
    "phone": 9004476917
  },
  {
    "name": "Dilip Ganekar",
    "designation": "ALP/VEN",
    "phone": 9004476955
  },
  {
    "name": "Anila M Shetty",
    "designation": "LPM/MAO",
    "phone": 9004476970
  },
  {
    "name": "Rupesh S",
    "designation": "LPM/MAO",
    "phone": 9004476971
  },
  {
    "name": "M C Ganapathy",
    "designation": "LPM/MAO",
    "phone": 9004476973
  },
  {
    "name": "Anil E Naik",
    "designation": "LPM/MAO",
    "phone": 9004476974
  },
  {
    "name": "Vijithkumar T V",
    "designation": "LPM/MAO",
    "phone": 9004476997
  },
  {
    "name": "Bala Naik",
    "designation": "LPM/MAO",
    "phone": 9004477093
  },
  {
    "name": "M P Singh",
    "designation": "LPM/MAO",
    "phone": 9004477310
  },
  {
    "name": "A K Kashyap",
    "designation": "LPM/MAO",
    "phone": 9004477579
  },
  {
    "name": "Karunakar Shetty",
    "designation": "LPG/VEN",
    "phone": 9004477586
  },
  {
    "name": "Aditya Joshi",
    "designation": "ALP/VEN",
    "phone": 9356922306
  },
  {
    "name": "Vaibhav Pashte",
    "designation": "ALP/VEN",
    "phone": 9356922305
  },
  {
    "name": "Suraj Mail",
    "designation": "ALP/VEN",
    "phone": 9356922304
  },
  {
    "name": "Rashmikanth Jadhav",
    "designation": "ALP/VEN",
    "phone": 9356922302
  },
  {
    "name": "Sujith Kumar",
    "designation": "ALP/MAO",
    "phone": 9356922303
  },
  {
    "name": "Mahesh Naik",
    "designation": "ALP/MAO",
    "phone": 9356922301
  },
  {
    "name": "V R Juwale",
    "designation": "LPG/VEN",
    "phone": 9356922298
  },
  {
    "name": "Santhosh Yadav",
    "designation": "ALP/VEN",
    "phone": 9356922297
  },
  {
    "name": "Samir Mohite",
    "designation": "LPG/VEN",
    "phone": 9356922296
  },
  {
    "name": "Prashant Dekane",
    "designation": "ALP/VEN",
    "phone": 9356922308
  },
  {
    "name": "Jagadeesha G",
    "designation": "ALP/MAO",
    "phone": 9356922307
  },
  {
    "name": "Amit Jadav",
    "designation": "LPG/VEN",
    "phone": 7400408139
  },
  {
    "name": "Avinash Mohite",
    "designation": "LPG/RN",
    "phone": 8605338339
  },
  {
    "name": "R S Parab",
    "designation": "LPG/VEN",
    "phone": 9356922293
  },
  {
    "name": "S Sampathkumar",
    "designation": "LPM/MAO",
    "phone": 9004477794
  },
  {
    "name": "C Dinesan",
    "designation": "LPM/MAO",
    "phone": 9004477796
  },
  {
    "name": "Jayarajan K Nair",
    "designation": "LPM/MAO",
    "phone": 9004477797
  },
  {
    "name": "S Murugan",
    "designation": "LPM/MAO",
    "phone": 9004477798
  },
  {
    "name": "Mareedu S Ankalu",
    "designation": "LPM/MAO",
    "phone": 9004477803
  },
  {
    "name": "V Augstus Antony",
    "designation": "LPM/MAO",
    "phone": 9004477813
  },
  {
    "name": "A W Ameenuddin",
    "designation": "LPM/MAO",
    "phone": 9004477839
  },
  {
    "name": "Vijith K",
    "designation": "LPM/MAO",
    "phone": 9004477843
  },
  {
    "name": "M K Sharma",
    "designation": "LPM/MAO",
    "phone": 9004477856
  },
  {
    "name": "S P Bansod",
    "designation": "LPM/RN",
    "phone": 9004477859
  },
  {
    "name": "P C Sudhakaran",
    "designation": "LPM/MAO",
    "phone": 9004477861
  },
  {
    "name": "T K Mukundan",
    "designation": "LPM/MAO",
    "phone": 9004477867
  },
  {
    "name": "R Y Tirodkar",
    "designation": "LPM/MAO",
    "phone": 9004477870
  },
  {
    "name": "T N Hulugappa",
    "designation": "LPM/MAO",
    "phone": 9004477873
  },
  {
    "name": "Ramesha L Bhat",
    "designation": "LP/MAO",
    "phone": 9004477877
  },
  {
    "name": "Jayantha",
    "designation": "LPM/SL",
    "phone": 9004477881
  },
  {
    "name": "R V Sawant",
    "designation": "CREW MGR /VEN",
    "phone": 9004477882
  },
  {
    "name": "Shantraj J Tatpati",
    "designation": "CREW MGR/VEN",
    "phone": 9004477883
  },
  {
    "name": "Md Iqbal",
    "designation": "LPM/SL",
    "phone": 9004477884
  },
  {
    "name": "M J Chari",
    "designation": "LPM/MAO",
    "phone": 9004477916
  },
  {
    "name": "S H Bellary",
    "designation": "LPM/MAO",
    "phone": 9004477921
  },
  {
    "name": "A K Naik",
    "designation": "LPM/MAO",
    "phone": 9004477950
  },
  {
    "name": "S H Padval",
    "designation": "LPM/MAO",
    "phone": 9004478283
  },
  {
    "name": "M S Reddy",
    "designation": "LPM/MAO",
    "phone": 9004479323
  },
  {
    "name": "R K Gupta",
    "designation": "LPM/MAO",
    "phone": 9004479324
  },
  {
    "name": "T K Naik",
    "designation": "LPP/MAO",
    "phone": 9004479326
  },
  {
    "name": "Jalesh C Nair",
    "designation": "INST/KRA",
    "phone": 9004479327
  },
  {
    "name": "Dinesh Bhat Gopi",
    "designation": "LPM/MAO",
    "phone": 9004479328
  },
  {
    "name": "Narendra Singh",
    "designation": "LPM/MAO",
    "phone": 9004479330
  },
  {
    "name": "Purushothama K",
    "designation": "LPM/MAO",
    "phone": 9004479331
  },
  {
    "name": "Rajeshkumar G",
    "designation": "LPG/VEN",
    "phone": 9004479332
  },
  {
    "name": "R S Srivastava",
    "designation": "LPM/MAO",
    "phone": 9004479334
  },
  {
    "name": "Austin Thampi",
    "designation": "LPP/MAO",
    "phone": 9004479335
  },
  {
    "name": "Ramesh Jinde",
    "designation": "CLI/MAO",
    "phone": 9004479336
  },
  {
    "name": "Shaji M M",
    "designation": "CCC/VEN",
    "phone": 9004479337
  },
  {
    "name": "R S Chintakindi",
    "designation": "RR INCHG/MAO",
    "phone": 9004479338
  },
  {
    "name": "J P S Chauhan",
    "designation": "LPG/MAO",
    "phone": 9004479339
  },
  {
    "name": "U V Naik",
    "designation": "LPG/VEN",
    "phone": 9004479340
  },
  {
    "name": "Pradeep C",
    "designation": "LPP/MAO",
    "phone": 9004479341
  },
  {
    "name": "Shibu Antony",
    "designation": "LPP/MAO",
    "phone": 9004479342
  },
  {
    "name": "Biju A P",
    "designation": "LPP/MAO",
    "phone": 9004479343
  },
  {
    "name": "Sajeesh P",
    "designation": "LPP/MAO",
    "phone": 9004479344
  },
  {
    "name": "Siyaf Kovoor",
    "designation": "LPP/MAO",
    "phone": 9004479345
  },
  {
    "name": "Rajeeve K P",
    "designation": "LPG/VEN",
    "phone": 9004479346
  },
  {
    "name": "Sreekumar T V",
    "designation": "LPG/VEN",
    "phone": 9004479348
  },
  {
    "name": "Rajesh R",
    "designation": "INST/KRA",
    "phone": 9004479349
  },
  {
    "name": "Saju Paul D",
    "designation": "LPG/VEN",
    "phone": 9004479350
  },
  {
    "name": "Vijaya Krishnan P G",
    "designation": "LPG/VEN",
    "phone": 9004479351
  },
  {
    "name": "Jaju Jathan",
    "designation": "LPG/VEN",
    "phone": 9004479352
  },
  {
    "name": "Shaji Thomas",
    "designation": "LPP/MAO",
    "phone": 9004479353
  },
  {
    "name": "Mohankumar S",
    "designation": "LPP/MAO",
    "phone": 9004479354
  },
  {
    "name": "Balakrishnan M V",
    "designation": "LPP/MAO",
    "phone": 9004479355
  },
  {
    "name": "Manjunath G Naik",
    "designation": "LPG/VEN",
    "phone": 9004479356
  },
  {
    "name": "B V Sureshkumar",
    "designation": "LPP/MAO",
    "phone": 9004479357
  },
  {
    "name": "Viresh Desai",
    "designation": "LPG/VEN",
    "phone": 9004478028
  },
  {
    "name": "Kevin J D'costa",
    "designation": "LPG/VEN",
    "phone": 9004478040
  },
  {
    "name": "Rajesh Desai",
    "designation": "LPG/VEN",
    "phone": 9004478042
  },
  {
    "name": "Girish S Manjerekar",
    "designation": "LPG/VEN",
    "phone": 9004478041
  },
  {
    "name": "Gurudas Gaude",
    "designation": "LPG/VEN",
    "phone": 9004478027
  },
  {
    "name": "Prathamesh Thumbare",
    "designation": "ALP/MAO",
    "phone": 9004479049
  },
  {
    "name": "Leo J M",
    "designation": "LPG/VEN",
    "phone": 9004479047
  },
  {
    "name": "Prasanna D Nagekar",
    "designation": "LPG/VEN",
    "phone": 9004479046
  },
  {
    "name": "Vishnu P Parab",
    "designation": "LPG/VEN",
    "phone": 9004479048
  },
  {
    "name": "Vijay Krishna",
    "designation": "LPG/VEN",
    "phone": 9004474435
  },
  {
    "name": "R T Kolkar",
    "designation": "LPG/VEN",
    "phone": 9004474436
  },
  {
    "name": "Sagar Surve",
    "designation": "ALP/VEN",
    "phone": 9004474437
  },
  {
    "name": "Amit Pendere",
    "designation": "LPG/VEN",
    "phone": 7400408110
  },
  {
    "name": "Prashant J",
    "designation": "LPG/VEN",
    "phone": 7400408263
  },
  {
    "name": "Chester D Torres",
    "designation": "LPG/VEN",
    "phone": 9004474448
  },
  {
    "name": "Shivananda P",
    "designation": "LPG/VEN",
    "phone": 9004474453
  },
  {
    "name": "S N Tambe",
    "designation": "LPG/RN",
    "phone": 9004474430
  },
  {
    "name": "Santosh Mohite",
    "designation": "LPG/RN",
    "phone": 8888500200
  },
  {
    "name": "Avadhut B Pingulkar",
    "designation": "LPG/VEN",
    "phone": 9004474428
  },
  {
    "name": "Rajesha",
    "designation": "LPG/SL",
    "phone": 9004474427
  },
  {
    "name": "Baylon Cardozo",
    "designation": "LPS/VEN",
    "phone": 9356922318
  },
  {
    "name": "Janardhana",
    "designation": "LPG/VEN",
    "phone": 7400408229
  },
  {
    "name": "A P Rao",
    "designation": "LPG/VEN",
    "phone": 7400408230
  },
  {
    "name": "Abhishek Gawade",
    "designation": "LPG/VEN",
    "phone": 7400408231
  },
  {
    "name": "Prasad V Naik",
    "designation": "LPS/MAO",
    "phone": 7400408232
  },
  {
    "name": "P M Jadhav",
    "designation": "LPG/VEN",
    "phone": 7400408233
  },
  {
    "name": "Nagaraj Ganiga",
    "designation": "LPG/VEN",
    "phone": 7400408234
  },
  {
    "name": "Bhojaraj Naik",
    "designation": "ALP/MAO",
    "phone": 7400408270
  },
  {
    "name": "Santosh Raikar",
    "designation": "ALP/MAO",
    "phone": 7400408271
  },
  {
    "name": "Raghavendra Devadiga",
    "designation": "ALP/MAO",
    "phone": 7400408275
  },
  {
    "name": "Rajendra Date",
    "designation": "ALP/RN",
    "phone": 7400408272
  },
  {
    "name": "Mihir Gawade",
    "designation": "ALP/MAO",
    "phone": 7400408273
  },
  {
    "name": "Adithya Shinde",
    "designation": "ALP/RN",
    "phone": 7400408274
  },
  {
    "name": "Ramesh Naik",
    "designation": "ALP/MAO",
    "phone": 7400408276
  },
  {
    "name": "Aditya Khare",
    "designation": "Goods Train Manager (GTM)/VEN",
    "phone": 7400408277
  },
  {
    "name": "Abhisek K",
    "designation": "ALP/MAO",
    "phone": 7400408279
  },
  {
    "name": "Madu Gouda",
    "designation": "ALP/MAO",
    "phone": 7400408287
  },
  {
    "name": "S Y Kudalkar",
    "designation": "ALP/MAO",
    "phone": 7400408280
  },
  {
    "name": "Uday Shetty",
    "designation": "ALP/MAO",
    "phone": 7400408281
  },
  {
    "name": "S M More",
    "designation": "ALP/RN",
    "phone": 7400408283
  },
  {
    "name": "Shivaraj P",
    "designation": "ALP/MAO",
    "phone": 7400408284
  },
  {
    "name": "Salim Patel",
    "designation": "ALP/MAO",
    "phone": 7400408285
  },
  {
    "name": "Sanjay Waradakar",
    "designation": "ALP/MAO",
    "phone": 7400408286
  },
  {
    "name": "Pravin Kelbaikar",
    "designation": "ALP/MAO",
    "phone": 7400408288
  },
  {
    "name": "Timmappa Sherugar",
    "designation": "ALP/MAO",
    "phone": 7400408289
  },
  {
    "name": "Umesh Acharya",
    "designation": "ALP/MAO",
    "phone": 7400408290
  },
  {
    "name": "Prakash Mogera",
    "designation": "ALP/MAO",
    "phone": 7400408291
  },
  {
    "name": "Mohan J Naik",
    "designation": "ALP/MAO",
    "phone": 7400408292
  },
  {
    "name": "Sunil Shetty",
    "designation": "ALP/MAO",
    "phone": 7400408293
  },
  {
    "name": "Abhijith V K",
    "designation": "ALP/MAO",
    "phone": 9356922278
  },
  {
    "name": "Rajat N",
    "designation": "ALP/RN",
    "phone": 9356922279
  },
  {
    "name": "Suraj Salunke",
    "designation": "ALP/MAO",
    "phone": 9356922280
  },
  {
    "name": "Dnayaneshwar",
    "designation": "ALP/MAO",
    "phone": 9356922281
  },
  {
    "name": "Manish Kubal",
    "designation": "ALP/MAO",
    "phone": 9356922283
  },
  {
    "name": "Nitin Devadiga",
    "designation": "ALP/MAO",
    "phone": 9356922284
  },
  {
    "name": "Manjunath A Naik",
    "designation": "Goods Train Manager (GTM/VEN)",
    "phone": 9356922285
  },
  {
    "name": "Laxman G",
    "designation": "ALP/MAO",
    "phone": 9356922286
  },
  {
    "name": "Shivaprasad P",
    "designation": "Goods Train Manager (GTM/VEN)",
    "phone": 9035644606
  },
  {
    "name": "Suraj Gamare",
    "designation": "ALP/RN",
    "phone": 9356922289
  },
  {
    "name": "Paresh D",
    "designation": "JE/EL/MAO",
    "phone": 9356922319
  },
  {
    "name": "Rohan Khedekar",
    "designation": "Goods Train Manager (GTM/VEN)",
    "phone": 7499162935
  },
  {
    "name": "Shrinivas Chitrapur",
    "designation": "ALP/MAO",
    "phone": 9356922292
  },
  {
    "name": "Sanjay Chopadekar",
    "designation": "Office Clerk (VEN Lobby)",
    "phone": 7400408172
  },
  {
    "name": "Prashant P Naik",
    "designation": "LPG/VEN",
    "phone": 7400408173
  },
  {
    "name": "Nitesh V Narvekar",
    "designation": "LPG/VEN",
    "phone": 7400408174
  },
  {
    "name": "Govind K",
    "designation": "LPG/VEN",
    "phone": 7400408175
  },
  {
    "name": "Kiran Naik",
    "designation": "LPG/VEN",
    "phone": 7400408176
  },
  {
    "name": "Pavan Kankonkar",
    "designation": "ALP/MAO",
    "phone": 7400408181
  },
  {
    "name": "Ramesh P khedekar",
    "designation": "ALP/RN",
    "phone": 7400408194
  },
  {
    "name": "Mahadhev Thakur",
    "designation": "ALP/MAO",
    "phone": 7400408213
  },
  {
    "name": "Avinash Gavali",
    "designation": "JE/EL",
    "phone": 7400408227
  },
  {
    "name": "Bhushan Salave",
    "designation": "ALP/VEN",
    "phone": 7400408203
  },
  {
    "name": "Nikhil Khatate",
    "designation": "ALP/RN",
    "phone": 7400408178
  },
  {
    "name": "Nikhil Kadam",
    "designation": "ALP/VEN",
    "phone": 7400408195
  },
  {
    "name": "Raj Prasad Shetty",
    "designation": "LPG/SL",
    "phone": 7400408196
  },
  {
    "name": "Mohseen Iqbal Naik",
    "designation": "ALP/VEN",
    "phone": 7400408197
  },
  {
    "name": "Pradeep P G",
    "designation": "ALP/VEN",
    "phone": 7400408198
  },
  {
    "name": "Rupesh J",
    "designation": "ALP/VEN",
    "phone": 7400408214
  },
  {
    "name": "Sujit Pawar",
    "designation": "ALP/RN",
    "phone": 7400408225
  },
  {
    "name": "M A Khedekar",
    "designation": "LPM/RN",
    "phone": 9004474821
  },
  {
    "name": "Sarvesh Thanekar",
    "designation": "ALP/VEN",
    "phone": 7400408180
  },
  {
    "name": "Vigneshwara",
    "designation": "ALP/VEN",
    "phone": 7400408182
  },
  {
    "name": "Dhanajaya B Acharya",
    "designation": "ALP/MAO",
    "phone": 7400408184
  },
  {
    "name": "Kamalakant Gaonkar",
    "designation": "ALP/VEN",
    "phone": 7400408185
  },
  {
    "name": "Bhagyesh Gurav",
    "designation": "ALP/VEN",
    "phone": 7400408186
  },
  {
    "name": "Sadanand Naik",
    "designation": "ALP/MAO",
    "phone": 7400408187
  },
  {
    "name": "Dattaram Sawal",
    "designation": "ALP/MAO",
    "phone": 7400408188
  },
  {
    "name": "S G Bhuran",
    "designation": "ALP/RN",
    "phone": 7400408189
  },
  {
    "name": "Goutam Mayekar",
    "designation": "ALP/MAO",
    "phone": 7400408190
  },
  {
    "name": "Manoj Kumara",
    "designation": "ALP/VEN",
    "phone": 7400408191
  },
  {
    "name": "Chandrakant Madkaikar",
    "designation": "ALP/MAO",
    "phone": 7400408192
  },
  {
    "name": "Ankur Kadam",
    "designation": "ALP/RN",
    "phone": 7400408193
  },
  {
    "name": "S M Parab",
    "designation": "ALP/MAO",
    "phone": 7400408201
  },
  {
    "name": "Siddesh Surve",
    "designation": "ALP/VEN",
    "phone": 7400408202
  },
  {
    "name": "Majunath I Naik",
    "designation": "ALP/MAO",
    "phone": 7400408205
  },
  {
    "name": "Suresha",
    "designation": "ALP/MAO",
    "phone": 7400408206
  },
  {
    "name": "K T Pednekar",
    "designation": "ALP/MAO",
    "phone": 7400408207
  },
  {
    "name": "Ganapthi Naik",
    "designation": "ALP/MAO",
    "phone": 7400408208
  },
  {
    "name": "Thimmappa D",
    "designation": "ALP/MAO",
    "phone": 7400408209
  },
  {
    "name": "Deepak S",
    "designation": "ALP/VEN",
    "phone": 7400408210
  },
  {
    "name": "Vijay Malwankar",
    "designation": "ALP/MAO",
    "phone": 7400408211
  },
  {
    "name": "Mahesh S",
    "designation": "ALP/MAO",
    "phone": 7400408212
  },
  {
    "name": "Darshan Kolekar",
    "designation": "ALP/MAO",
    "phone": 7400408215
  },
  {
    "name": "Vishal J",
    "designation": "ALP/RN",
    "phone": 7400408216
  },
  {
    "name": "Vijay Manjrekar",
    "designation": "ALP/MAO",
    "phone": 7400408217
  },
  {
    "name": "Prakash Shetty",
    "designation": "LP/MAO",
    "phone": 7400408218
  },
  {
    "name": "Sandesh P",
    "designation": "ALP/MAO",
    "phone": 7400408220
  },
  {
    "name": "Tukaram Khambe",
    "designation": "ALP/RN",
    "phone": 7400408221
  },
  {
    "name": "Bhaskar D",
    "designation": "ALP/MAO",
    "phone": 7400408222
  },
  {
    "name": "Vishal Powar",
    "designation": "ALP/RN",
    "phone": 7400408224
  },
  {
    "name": "Kundan Jadhav",
    "designation": "ALP/RN",
    "phone": 7400408226
  },
  {
    "name": "ART/VEN",
    "designation": "ART/VEN",
    "phone": 9004477564
  },
  {
    "name": "ART/VEN",
    "designation": "ART/VEN",
    "phone": 9004477571
  },
  {
    "name": "ART/VEN",
    "designation": "ART/VEN",
    "phone": 9004477572
  },
  {
    "name": "ARMV/VEN",
    "designation": "ARMV/VEN",
    "phone": 9004477573
  },
  {
    "name": "ARMV/VEN",
    "designation": "ARMV/VEN",
    "phone": 9004477575
  },
  {
    "name": "ARMV/VEN",
    "designation": "ARMV/VEN",
    "phone": 9004477577
  },
  {
    "name": "RCD- Fuelling Point",
    "designation": "RCD/MAO",
    "phone": 9004476975
  },
  {
    "name": "RCD-Pump House",
    "designation": "RCD/MAO",
    "phone": 9004474434
  },
  {
    "name": "Lobby Madgaon",
    "designation": "MAO Lobby",
    "phone": 9004477112
  },
  {
    "name": "Lobby Verna",
    "designation": "VEN Lobby",
    "phone": 9004477114
  },
  {
    "name": "BCM 385",
    "designation": "BCM 385",
    "phone": 9004478293
  },
  {
    "name": "CSM 947",
    "designation": "CSM 947",
    "phone": 9004478294
  },
  {
    "name": "Enayat Hussain",
    "designation": "Sr RTM/MAO",
    "phone": 9373162761, isHOD: true
  },
  {
    "name": "Bhawnath Mishra",
    "designation": "SMR/MAO",
    "phone": 9004476734
  },
  {
    "name": "Vijay wankhede",
    "designation": "AS/MAO",
    "phone": 9004476214
  },
  {
    "name": "Virendra Kumar",
    "designation": "AS/RN",
    "phone": 9004476733
  },
  {
    "name": "Babaji Desai",
    "designation": "Senoir Goods Train Manager (SGTM)/VEN",
    "phone": 9004476036
  },
  {
    "name": "Harisha K",
    "designation": "Senoir Goods Train Manager (SGTM)/VEN",
    "phone": 9004476051
  },
  {
    "name": "Ravi Manjunath Patgar",
    "designation": "Senoir Goods Train Manager (SGTM)/VEN",
    "phone": 9004476141
  },
  {
    "name": "Molu Datta Velip",
    "designation": "M/E Train Manager (METM)/MAO",
    "phone": 9004476144
  },
  {
    "name": "Nagraj Gouda",
    "designation": "Senoir Goods Train Manager (SGTM)/VEN",
    "phone": 9004476146
  },
  {
    "name": "Pandu Narayan Naik",
    "designation": "Senoir Goods Train Manager (SGTM)/VEN",
    "phone": 9004476168
  },
  {
    "name": "Harishchandra P Kaskar",
    "designation": "Senoir Goods Train Manager (SGTM)/VEN",
    "phone": 9004476170
  },
  {
    "name": "Roopnath Naik",
    "designation": "Senoir Goods Train Manager (SGTM)/VEN",
    "phone": 9004476204
  },
  {
    "name": "Vaman M Kurdekar",
    "designation": "Senoir Goods Train Manager (SGTM)/VEN",
    "phone": 9004476242
  },
  {
    "name": "Satish Majalikar",
    "designation": "Senoir Goods Train Manager (SGTM)/VEN",
    "phone": 9004476245
  },
  {
    "name": "Sunil Uttam Gawade",
    "designation": "Senoir Goods Train Manager (SGTM)/VEN",
    "phone": 9004476246
  },
  {
    "name": "Suryakant Naik",
    "designation": "Senoir Goods Train Manager (SGTM)/VEN",
    "phone": 9004476249
  },
  {
    "name": "Mahabaleshwar N Naik",
    "designation": "Senoir Goods Train Manager (SGTM)/VEN",
    "phone": 9004476325
  },
  {
    "name": "Beera Vasu Gouda",
    "designation": "Senoir Goods Train Manager (SGTM)/VEN",
    "phone": 9004476328
  },
  {
    "name": "Chandrakant D Naik",
    "designation": "Senoir Goods Train Manager (SGTM)/VEN",
    "phone": 9004478157
  },
  {
    "name": "Maruti Naik",
    "designation": "Senoir Goods Train Manager (SGTM)/VEN",
    "phone": 9004478273
  },
  {
    "name": "Shailendra G Kalgutkar",
    "designation": "Senoir Goods Train Manager (SGTM)/VEN",
    "phone": 9004478305
  },
  {
    "name": "Hari Vasudev Morajkar",
    "designation": "Senoir Goods Train Manager (SGTM)/VEN",
    "phone": 9004478307
  },
  {
    "name": "Rama Ganpati Madival",
    "designation": "Senoir Goods Train Manager (SGTM)/VEN",
    "phone": 9004478311
  },
  {
    "name": "Thanekar Rudresh",
    "designation": "Goods Train Manager (GTM)/VEN",
    "phone": 9004478345
  },
  {
    "name": "Chandrakant H Gavadi",
    "designation": "Senoir Goods Train Manager (SGTM)/VEN",
    "phone": 9004478424
  },
  {
    "name": "Wilson Philip D'souza",
    "designation": "Senoir Goods Train Manager (SGTM)/VEN",
    "phone": 9004478445
  },
  {
    "name": "Chadrashekhara S V",
    "designation": "Senoir Goods Train Manager (SGTM)/VEN",
    "phone": 9004478143
  },
  {
    "name": "E Manoj",
    "designation": "M/E Train Manager (METM)/MAO",
    "phone": 9004479073
  },
  {
    "name": "Sabin P Jose",
    "designation": "M/E Train Manager (METM)/MAO",
    "phone": 9004479085
  },
  {
    "name": "Chidanand G",
    "designation": "M/E Train Manager (METM)/MAO",
    "phone": 9004479114
  },
  {
    "name": "V R Bhandari",
    "designation": "M/E Train Manager (METM)/MAO",
    "phone": 9004479116
  },
  {
    "name": "Dinesh P Kalas",
    "designation": "M/E Train Manager (METM)/MAO",
    "phone": 9004479118
  },
  {
    "name": "Deepak V Shetty",
    "designation": "M/E Train Manager (METM)/MAO",
    "phone": 9004479147
  },
  {
    "name": "K A Gawade",
    "designation": "M/E Train Manager (METM)/MAO",
    "phone": 9004479148
  },
  {
    "name": "Dhirendra S Singh",
    "designation": "M/E Train Manager (METM)/MAO",
    "phone": 9004479149
  },
  {
    "name": "G V Arolkar",
    "designation": "TMR INCHG/MAO",
    "phone": 9004479152
  },
  {
    "name": "Bhanuprakash Kasturi",
    "designation": "M/E Train Manager (METM)/MAO",
    "phone": 9004479175
  },
  {
    "name": "J Alderine",
    "designation": "M/E Train Manager (METM)/MAO",
    "phone": 9004479177
  },
  {
    "name": "G N Hegade",
    "designation": "M/E Train Manager (METM)/MAO",
    "phone": 9004479187
  },
  {
    "name": "Raghuveer Ishwar Naik",
    "designation": "M/E Train Manager (METM)/MAO",
    "phone": 9004479199
  },
  {
    "name": "Ashok S Devadiga",
    "designation": "M/E Train Manager (METM)/MAO",
    "phone": 9004479224
  },
  {
    "name": "Ramdas S Naik",
    "designation": "M/E Train Manager (METM)/MAO",
    "phone": 9004479225
  },
  {
    "name": "Anil Salunkhe",
    "designation": "M/E Train Manager (METM)/MAO",
    "phone": 9004479226
  },
  {
    "name": "P C Tiu",
    "designation": "M/E Train Manager (METM)/MAO",
    "phone": 9004479267
  },
  {
    "name": "Prakash Naik",
    "designation": "M/E Train Manager (METM)/MAO",
    "phone": 9004479268
  },
  {
    "name": "Sujoy Biswas",
    "designation": "M/E Train Manager (METM)/MAO",
    "phone": 9004479269
  },
  {
    "name": "R K Shetty",
    "designation": "M/E Train Manager (METM)/MAO",
    "phone": 9004479270
  },
  {
    "name": "Girish G Hegade",
    "designation": "M/E Train Manager (METM)/MAO",
    "phone": 9004479281
  },
  {
    "name": "R N Gaonkar",
    "designation": "M/E Train Manager (METM)/MAO",
    "phone": 9004479282
  },
  {
    "name": "S N Shetty",
    "designation": "M/E Train Manager (METM)/MAO",
    "phone": 9004479283
  },
  {
    "name": "D T Hegade",
    "designation": "M/E Train Manager (METM)/MAO",
    "phone": 9004479284
  },
  {
    "name": "Sannaya M Naik",
    "designation": "M/E Train Manager (METM)/MAO",
    "phone": 9004479285
  },
  {
    "name": "P C Biswas",
    "designation": "M/E Train Manager (METM)/MAO",
    "phone": 9004479287
  },
  {
    "name": "Binod Kumar Poddar",
    "designation": "M/E Train Manager (METM)/RN",
    "phone": 9004479288
  },
  {
    "name": "Manoj Gunagi",
    "designation": "Goods Train Manager (GTM)/VEN",
    "phone": 9004479289
  },
  {
    "name": "Vikas S Rao K",
    "designation": "M/E Train Manager (METM)/MAO",
    "phone": 9004479290
  },
  {
    "name": "Ritesh K Shetty",
    "designation": "M/E Train Manager (METM)/MAO",
    "phone": 9004479291
  },
  {
    "name": "S B Shetty",
    "designation": "M/E Train Manager (METM)/MAO",
    "phone": 9004479292
  },
  {
    "name": "Suresh J Acharya",
    "designation": "M/E Train Manager (METM)/MAO",
    "phone": 9004479293
  },
  {
    "name": "Md Ismile",
    "designation": "M/E Train Manager (METM)/MAO",
    "phone": 9004479294
  },
  {
    "name": "Kishor D Naik Gaunkar",
    "designation": "M/E Train Manager (METM)/MAO",
    "phone": 9004479295
  },
  {
    "name": "H S Gouda",
    "designation": "M/E Train Manager (METM)/MAO",
    "phone": 9004479296
  },
  {
    "name": "S J Shetty",
    "designation": "M/E Train Manager (METM)/MAO",
    "phone": 9004479297
  },
  {
    "name": "S K Shetty",
    "designation": "M/E Train Manager (METM)/MAO",
    "phone": 9004479299
  },
  {
    "name": "M G Naik",
    "designation": "M/E Train Manager (METM)/MAO",
    "phone": 9004479301
  },
  {
    "name": "K K Shetty",
    "designation": "M/E Train Manager (METM)/MAO",
    "phone": 9004479302
  },
  {
    "name": "Timmappa N Devadiga",
    "designation": "Passenger Train Manager (PTM)/MAO",
    "phone": 9004479303
  },
  {
    "name": "Ganapati S Naik",
    "designation": "Passenger Train Manager (PTM)/MAO",
    "phone": 9004479304
  },
  {
    "name": "P K Venkatesh",
    "designation": "Passenger Train Manager (PTM)/MAO",
    "phone": 9004479305
  },
  {
    "name": "Dinesh S Pai",
    "designation": "Passenger Train Manager (PTM)/MAO",
    "phone": 9004479306
  },
  {
    "name": "Chidanand K V",
    "designation": "M/E Train Manager (METM)/MAO",
    "phone": 9004479307
  },
  {
    "name": "Prashant E Vengurlekar",
    "designation": "Passenger Train Manager (PTM)/MAO",
    "phone": 9004479308
  },
  {
    "name": "Silvan A Horta",
    "designation": "Passenger Train Manager (PTM)/MAO",
    "phone": 9004479309
  },
  {
    "name": "H M Gonda",
    "designation": "M/E Train Manager (METM)/MAO",
    "phone": 9004479311
  },
  {
    "name": "Ramesh R Gawade",
    "designation": "M/E Train Manager (METM)/MAO",
    "phone": 9004479312
  },
  {
    "name": "Wilton Gregorio F",
    "designation": "Senoir Goods Train Manager (SGTM)/VEN",
    "phone": 9004479313
  },
  {
    "name": "Santosh Tato Raut",
    "designation": "Passenger Train Manager (PTM)/MAO",
    "phone": 9004479314
  },
  {
    "name": "Ishwar N Naik",
    "designation": "Senoir Goods Train Manager (SGTM)/VEN",
    "phone": 9004479315
  },
  {
    "name": "Ganesh S",
    "designation": "M/E Train Manager (METM)/MAO",
    "phone": 9004479318
  },
  {
    "name": "Salunkhe Sadashiv R",
    "designation": "Senoir Goods Train Manager (SGTM)/VEN",
    "phone": 9004479321
  },
  {
    "name": "Sadananda G Bandekar",
    "designation": "M/E Train Manager (METM)/MAO",
    "phone": 9004479322
  },
  {
    "name": "Pratik Patil",
    "designation": "Goods Train Manager (GTM)/VEN",
    "phone": 7400408788
  },
  {
    "name": "Sourabh Nawale",
    "designation": "Goods Train Manager (GTM)/VEN",
    "phone": 7400408790
  },
  {
    "name": "Priya Naik",
    "designation": "Goods Train Manager (GTM)/VEN",
    "phone": 7400408791
  },
  {
    "name": "Uday Pawar",
    "designation": "Goods Train Manager (GTM)/RN",
    "phone": 7400408792
  },
  {
    "name": "Balakrishna Naik",
    "designation": "Passenger Train Manager (PTM)/MAO",
    "phone": 7400408793
  },
  {
    "name": "Gururaj T",
    "designation": "Goods Train Manager (GTM)/SL",
    "phone": 7400408794
  },
  {
    "name": "Abhinav Kamble",
    "designation": "Senoir Goods Train Manager (SGTM)/RN",
    "phone": 9356922316
  },
  {
    "name": "Maheshwar Pawaskar",
    "designation": "Senoir Goods Train Manager (GTM)/RN",
    "phone": 7400408796
  },
  {
    "name": "Prashant Naik",
    "designation": "Goods Train Manager (GTM)/VEN",
    "phone": 7400408797
  },
  {
    "name": "Shrikanth Agale",
    "designation": "Senoir Goods Train Manager (SGTM)/RN",
    "phone": 7400408798
  },
  {
    "name": "Tejesh Maulingkar",
    "designation": "Senoir Goods Train Manager (SGTM)/VEN",
    "phone": 7400408799
  },
  {
    "name": "Aditya Ambekar",
    "designation": "Senoir Goods Train Manager (SGTM)/VEN",
    "phone": 7499159565
  },
  {
    "name": "Pratik Betal",
    "designation": "Senoir Goods Train Manager (SGTM)/RN",
    "phone": 7499162934
  },
  {
    "name": "Hrishikesh H",
    "designation": "Goods Train Manager (GTM)/RN",
    "phone": 7499162935
  },
  {
    "name": "Umesh Padatare",
    "designation": "Goods Train Manager (GTM)/RN",
    "phone": 7499162938
  },
  {
    "name": "Rahul Jadhav",
    "designation": "Goods Train Manager (GTM)/RN",
    "phone": 7499162939
  },
  {
    "name": "Mayuresh Borse",
    "designation": "Goods Train Manager (GTM)/RN",
    "phone": 7499162940
  },
  {
    "name": "Govind B Kale",
    "designation": "Goods Train Manager (GTM)/RN",
    "phone": 7499162941
  },
  {
    "name": "Yogesh B Mandole",
    "designation": "Goods Train Manager (GTM)/RN",
    "phone": 7499162943
  },
  {
    "name": "Sagar B Bajbalkar",
    "designation": "Goods Train Manager (GTM)/RN",
    "phone": 7499162954
  },
  {
    "name": "Mahendra Bhoi",
    "designation": "Goods Train Manager (GTM)/RN",
    "phone": 7499162957
  },
  {
    "name": "Prshant Patil",
    "designation": "Goods Train Manager (GTM)/RN",
    "phone": 7499162955
  },
  {
    "name": "Govind K",
    "designation": "Goods Train Manager (GTM)/RN",
    "phone": 9004479316
  },
  {
    "name": "Hitesh Gotarne",
    "designation": "Goods Train Manager (GTM)/RN",
    "phone": 9004476147
  },
  {
    "name": "Sushil Kanhekar",
    "designation": "Senior Goods Train Manager (SGTM)/VEN",
    "phone": 9004476382
  },
  {
    "name": "EIMWB/VEN-1",
    "designation": "EIMWB/VEN-1",
    "phone": 9004477580
  },
  {
    "name": "EIMWB/VEN-2",
    "designation": "EIMWB/VEN-2",
    "phone": 7400408263
  },
  {
    "name": "Pernem",
    "designation": "PERN Station CUG",
    "phone": 9004476889
  },
  {
    "name": "Thivim",
    "designation": "THVM Station CUG",
    "phone": 9004476890
  },
  {
    "name": "Karmali",
    "designation": "KRMI Station CUG",
    "phone": 9004476891
  },
  {
    "name": "Verna",
    "designation": "VEN Station CUG",
    "phone": 9004476892
  },
  {
    "name": "Majorda",
    "designation": "MJO Station CUG",
    "phone": 9004476893
  },
  {
    "name": "Madgaon",
    "designation": "MAO Station CUG",
    "phone": 9004476894
  },
  {
    "name": "Balli",
    "designation": "BLLI Station CUG",
    "phone": 7498815598
  },
  {
    "name": "Canacona",
    "designation": "CNO Station CUG",
    "phone": 9004476896
  },
  {
    "name": "Loliem",
    "designation": "LOL Station CUG",
    "phone": 9004476879
  }
];
