document.addEventListener("DOMContentLoaded", function () {
    const farmerDropdowns = document.getElementById("farmerDropdowns");
    const farmerDetails = document.getElementById("farmerDetails");

    const data = [
        {'Farmer Name': 'Nagaraju', 'Phone': '9182671819', 'Current Crops': 'C2,C4,C8,C19,C22', 'Variants': '', 'Farm Size': '', 'Quantity of produce': '', 'Farm Location': 'SatyaSai Dist, Basampalle'}, 
        {'Farmer Name': 'Devender Reddy', 'Phone': '9392435685', 'Current Crops': 'C6,C7,C22,C5', 'Variants': '', 'Farm Size': '', 'Quantity of produce': '', 'Farm Location': 'Anantapur Dist'}, 
        {'Farmer Name': 'Jadala Balaraju', 'Phone': '9848052194', 'Current Crops': 'C20,C7,C28', 'Variants': '', 'Farm Size': '1 acre,,', 'Quantity of produce': '', 'Farm Location': 'Narayanapeta Dist'}, {'Farmer Name': 'Surya Narayana', 'Phone': '9701912779', 'Current Crops': 'C4,C7,C5,C27', 'Variants': '', 'Farm Size': ',,1 acre,', 'Quantity of produce': '', 'Farm Location': 'Nandyala Dist'}, {'Farmer Name': 'Osman Shaik', 'Phone': '9866302875', 'Current Crops': 'C5,C15,C16,C21,C6', 'Variants': ',,,Black,', 'Farm Size': '1.5 acre,,,,0.25 acre', 'Quantity of produce': '', 'Farm Location': 'Tripuraram, Nalgonda Dist'}, {'Farmer Name': 'Devadasu', 'Phone': '9381704788', 'Current Crops': '', 'Variants': '', 'Farm Size': '8 acre', 'Quantity of produce': '', 'Farm Location': 'IIja Mandal, Allampud Jowalamba Dist, Pulikel Village'}, {'Farmer Name': 'Tejas', 'Phone': '9502293343', 'Current Crops': 'C4', 'Variants': '', 'Farm Size': '', 'Quantity of produce': '', 'Farm Location': 'Gorantla'}, {'Farmer Name': 'Thimappa - K Akhil', 'Phone': '8008658489', 'Current Crops': 'C12, C5, C20', 'Variants': '', 'Farm Size': '1.5 acre, 2 acre,0.25 acre', 'Quantity of produce': '', 'Farm Location': 'Singanamala '}, {'Farmer Name': 'Viswanath', 'Phone': '9550371600', 'Current Crops': 'C11, C29, C24', 'Variants': '', 'Farm Size': '300 trees, 4 acre 300 trees, 800 saplings', 'Quantity of produce': '', 'Farm Location': 'Nalgonda Dist, Mungodu Mandal, Koratakal Village'}, {'Farmer Name': 'Nagender Goli', 'Phone': '7977749510', 'Current Crops': 'C28, C20', 'Variants': '', 'Farm Size': '', 'Quantity of produce': '', 'Farm Location': ''}, {'Farmer Name': 'Ramadevi Mylaru', 'Phone': '7842832422', 'Current Crops': 'C4', 'Variants': '', 'Farm Size': '3.5 acre', 'Quantity of produce': '', 'Farm Location': 'Korumavella,Mydukuru Mandal, Kadapa Dist'}, {'Farmer Name': 'Siva Bramha', 'Phone': '', 'Current Crops': 'C5,C13,C17,C18', 'Variants': '', 'Farm Size': '', 'Quantity of produce': '', 'Farm Location': 'Giddaluru, Prakasam'}, {'Farmer Name': 'Hari Narayana', 'Phone': '8121143346', 'Current Crops': '', 'Variants': '', 'Farm Size': '', 'Quantity of produce': '', 'Farm Location': 'Hindupur , Peddireddipalle'}, {'Farmer Name': 'Srinivasarao Vanjarapu', 'Phone': '9848965576', 'Current Crops': 'C20', 'Variants': '', 'Farm Size': '1 acre', 'Quantity of produce': '', 'Farm Location': 'Gowripatnam, E Govadavari Dist'}, {'Farmer Name': 'Surakanti Govardhan', 'Phone': '8074089626', 'Current Crops': 'C4', 'Variants': '', 'Farm Size': '', 'Quantity of produce': '', 'Farm Location': 'Medaram, Mulugu Dist, Sammakka Sarakka TN'}, {'Farmer Name': 'Nathi Akhila', 'Phone': '7569958281', 'Current Crops': '', 'Variants': '', 'Farm Size': '', 'Quantity of produce': '', 'Farm Location': 'Village Devalammanagarm, Mandal Chowtuppal, District yadadri buvangiri, Telangana'}, {'Farmer Name': 'Narsa Reddy', 'Phone': '8186881889', 'Current Crops': 'C1,C3,C10,C22', 'Variants': '', 'Farm Size': '', 'Quantity of produce': '', 'Farm Location': 'Annamayya Dist'}, {'Farmer Name': 'Chennareddy sandhya', 'Phone': '8500074408', 'Current Crops': 'C2', 'Variants': '', 'Farm Size': '', 'Quantity of produce': '', 'Farm Location': 'Kanekal'}, {'Farmer Name': 'Gaddam Venkatesh', 'Phone': '9398520861', 'Current Crops': 'C20', 'Variants': 'Mysore Mallika', 'Farm Size': '', 'Quantity of produce': '1000kgs', 'Farm Location': 'MahaboobNagar'}, {'Farmer Name': 'Kishore Murari', 'Phone': '9705499608', 'Current Crops': 'C4,C3,C23,C24,C10', 'Variants': '', 'Farm Size': '', 'Quantity of produce': '50,120,150,70', 'Farm Location': 'Khammam, Eluguru'}, {'Farmer Name': 'Anji Neyulu', 'Phone': '', 'Current Crops': 'C25,C2,C26', 'Variants': 'Dilkush,,', 'Farm Size': '1.5 acre 486 trees, 2.5 acre, 3.5 acre 1000 trees', 'Quantity of produce': '', 'Farm Location': 'Anantapur, Korikodu'}, {'Farmer Name': 'Sreenu Kommara', 'Phone': '9493642248', 'Current Crops': 'C11,C4', 'Variants': '', 'Farm Size': '200 trees 12 years +120 trees 4 years', 'Quantity of produce': '', 'Farm Location': 'Nellore Dist, Udayagiri Constituency'}, {'Farmer Name': 'Jhansi Lakshmi', 'Phone': '', 'Current Crops': '', 'Variants': '', 'Farm Size': '', 'Quantity of produce': '', 'Farm Location': ''}, {'Farmer Name': 'Somasekhar Reddy', 'Phone': '', 'Current Crops': 'C5', 'Variants': 'K6/Nati/Tirupathi', 'Farm Size': '5 acre', 'Quantity of produce': '', 'Farm Location': 'Rayadurgam, Atp Dist'}, {'Farmer Name': 'Mylaru Sreenivas', 'Phone': '', 'Current Crops': 'C12', 'Variants': '', 'Farm Size': '', 'Quantity of produce': '', 'Farm Location': ''}, {'Farmer Name': 'MV Ramesh', 'Phone': '', 'Current Crops': 'C9,C20', 'Variants': '', 'Farm Size': '', 'Quantity of produce': '', 'Farm Location': ''}, {'Farmer Name': 'Baburao Nayak', 'Phone': '', 'Current Crops': '', 'Variants': '', 'Farm Size': '', 'Quantity of produce': '', 'Farm Location': ''}, {'Farmer Name': 'Kurumurthi', 'Phone': '9491488762', 'Current Crops': '', 'Variants': '', 'Farm Size': '', 'Quantity of produce': '', 'Farm Location': 'Makthal Mandal'}, {'Farmer Name': 'G Venkateshwarulu', 'Phone': '', 'Current Crops': 'C3', 'Variants': '', 'Farm Size': '', 'Quantity of produce': '', 'Farm Location': 'Tirupathi, Venkatagiri'}, {'Farmer Name': 'Ramakrishna Prasad', 'Phone': '9866421916', 'Current Crops': 'C23, C30, C5, C7', 'Variants': 'Taiwan Light pink,,,', 'Farm Size': '3000 trees 4 years 5 acre, 2700 trees 2 years 6 acre,,', 'Quantity of produce': '', 'Farm Location': 'Giddaluru, Prakasam Dist'}, {'Farmer Name': 'Guguloth Prrashanth', 'Phone': '8555875413', 'Current Crops': 'C5, C20', 'Variants': '', 'Farm Size': '2 acre, 10 acre', 'Quantity of produce': '', 'Farm Location': 'Janagam Dist, Meedikonda Village'}, {'Farmer Name': 'Yogananda', 'Phone': '9441441322', 'Current Crops': '', 'Variants': '', 'Farm Size': '', 'Quantity of produce': '', 'Farm Location': ''}, {'Farmer Name': 'Krishna Goud', 'Phone': '9705465883', 'Current Crops': '', 'Variants': '', 'Farm Size': '', 'Quantity of produce': '', 'Farm Location': ''}, {'Farmer Name': 'Naresh Padiri', 'Phone': '14088745587', 'Current Crops': '', 'Variants': '', 'Farm Size': '', 'Quantity of produce': '', 'Farm Location': ''}, {'Farmer Name': 'Mani Kanta', 'Phone': '', 'Current Crops': '', 'Variants': '', 'Farm Size': '', 'Quantity of produce': '', 'Farm Location': ''}, {'Farmer Name': 'Kothapalli Venkata Narayana', 'Phone': '9949931398', 'Current Crops': 'C20', 'Variants': 'Kumkumashali/Black/Rice', 'Farm Size': '', 'Quantity of produce': '', 'Farm Location': 'Khammam Dist, Kallur Mandal'}, {'Farmer Name': 'Jakkani Shankaraiah', 'Phone': '9951505342', 'Current Crops': 'C29', 'Variants': '', 'Farm Size': '1 acre 170 trees', 'Quantity of produce': '', 'Farm Location': 'Peddapalle Dist, Julapelli Mandal, Peddapuram Village'}, {'Farmer Name': 'Vidya N', 'Phone': '', 'Current Crops': '', 'Variants': '', 'Farm Size': '', 'Quantity of produce': '', 'Farm Location': ''}, {'Farmer Name': 'Kavitha Nadimpalli', 'Phone': '7680967818', 'Current Crops': '', 'Variants': '', 'Farm Size': '', 'Quantity of produce': '', 'Farm Location': ''}, {'Farmer Name': 'Kalishetty Sheshadri', 'Phone': '9381076876', 'Current Crops': '', 'Variants': '', 'Farm Size': '', 'Quantity of produce': '', 'Farm Location': 'Chittor'}, {'Farmer Name': 'Bindu Bharathi Katari', 'Phone': '9963833397', 'Current Crops': '', 'Variants': '', 'Farm Size': '', 'Quantity of produce': '', 'Farm Location': 'Nellore'}, {'Farmer Name': 'Somasekhar Reddy', 'Phone': '9550218282', 'Current Crops': 'C12', 'Variants': '', 'Farm Size': '', 'Quantity of produce': '', 'Farm Location': ''}, {'Farmer Name': 'Mokshita', 'Phone': '', 'Current Crops': '', 'Variants': '', 'Farm Size': '', 'Quantity of produce': '', 'Farm Location': 'Tirupathi'}, {'Farmer Name': 'Shiva Kuruvella', 'Phone': '9505919023', 'Current Crops': 'C12, C20', 'Variants': '', 'Farm Size': '', 'Quantity of produce': '', 'Farm Location': 'Mulugu Dist, TN'}, {'Farmer Name': 'Naga raj', 'Phone': '9916612513', 'Current Crops': '', 'Variants': '', 'Farm Size': '', 'Quantity of produce': '', 'Farm Location': 'Kurnool Dist'}, {'Farmer Name': 'Basavaraju M', 'Phone': '6305065454', 'Current Crops': 'C12', 'Variants': 'Badiga Dabbi', 'Farm Size': '3 acre', 'Quantity of produce': '', 'Farm Location': 'Beluguppa M, Anantapur Dist'},
                // Add more data objects as needed
            ];

    // Create a dropdown for each farmer
    data.forEach((item) => {
        const farmerName = item["Farmer Name"];
        
        // Create a label element
        const label = document.createElement("label");
        label.textContent = farmerName;

        // Create a dropdown element
        const dropdown = document.createElement("select");
        dropdown.value = farmerName;

        // Add options to the dropdown
        for (const key in item) {
            if (key !== "Farmer Name") {
                const option = document.createElement("option");
                option.value = key;
                option.textContent = key;
                dropdown.appendChild(option);
            }
        }

        // Add an event listener to each dropdown
        dropdown.addEventListener("change", function () {
            const selectedFarmer = farmerName;
            const selectedField = this.value;
            const selectedData = item[selectedField];
            
            if (selectedData) {
                farmerDetails.innerHTML = `<p><strong>${selectedField}:</strong> ${selectedData}</p>`;
            } else {
                farmerDetails.innerHTML = "";
            }
        });

        // Create a container div for each dropdown
        const container = document.createElement("div");
        container.className = "dropdown-container";
        container.appendChild(label);
        container.appendChild(dropdown);

        // Append the container to the document
        farmerDropdowns.appendChild(container);
    });
});
