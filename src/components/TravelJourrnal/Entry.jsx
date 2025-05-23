export default function Entry(){
    return <>
        <main>
            <article className = 'JournalEntry'>

                <div className="JournalImgContainer">                
                        <img src="./src/images/TravelJournalImg/mountfuji.png" alt="" 
                        srcset="" 
                        className="imgMountFuji"/>
                </div>


                <div className="JournalMainContent">

                    <svg width="7" height="10" viewBox="0 0 7 10" fill="red" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.57866 5.25002C2.65532 5.25002 1.90837 4.50221 1.90837 3.57965C1.90837 2.65757 2.65532 1.90911 3.57866 1.90911C4.50167 1.90911 5.24927 2.65757 5.24927 3.57965C5.24927 4.50221 4.50167 5.25002 3.57866 5.25002ZM3.48394 0C1.54227 0 0 1.63678 0 3.65569C0 6.40791 2.95078 9.25191 2.95078 9.25191C3.34777 9.62783 3.59437 9.65847 4.01646 9.25191C4.01646 9.25191 7 6.40791 7 3.65569C7 1.63678 5.42544 0 3.48394 0Z" fill="#F55A5A"/>
                    </svg>

                    <span className = 'JournalCountry'>Japan</span>

                    <a className = 'JournalLink' href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">View on Google Maps</a>
                    <h2 className="JournalPlace">Mount Fuji</h2>
                    <h6 className = 'JournalTripDates'>12 Jan, 2021 - 24 Jan, 2021</h6>
                    <p className = 'JournalDesc'>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>

                    

                
                </div>

            </article>
        </main>
    
    </>
}