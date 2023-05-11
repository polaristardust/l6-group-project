 import './Info.css';
 import { Link } from "react-router-dom";
 import { useState } from 'react';
 import NavBar from './components/NavBar'
 import Game from './components/Game'

 function Info() {
   const [textValue, setTextValue] = useState("");
   const [currentPage, setCurrentPage] = useState(<NavBar />);

   function inputChanged(e){
     setTextValue(e.target.value)
   }

   function changePage(page) {
     setCurrentPage(page);}
  
   return (
     <div className="Info">
     <NavBar />
     <h1>Game</h1>
     {currentPage}
     <button onClick={()=>changePage(<NavBar />)}>Page One</button><button onClick={()=>changePage(<Game/>)}>Page Two</button>
     <div className="w3-content" style={{maxWidth: '1200px'}}>

       <p>
         <button onClick={() => darkMode()}>Dark Mode</button>
         <button onClick={() => lightMode()}>Light Mode</button>
      </p>

       <div className="w3-main" style={{marginLeft: '250px'}}>
        <div className="w3-hide-large" style={{marginTop: '83px'}}></div>
        <header className="w3-container w3-xlarge">
          <p className="w3-center w3-padding-top-32">Intro to Internet Safety</p>
           <p className="w3-center w3-medium w3-padding"><i> Let's get started!</i></p>
           <div className="w3-display-container w3-center">
             <img src="" alt="" style={{width: '80%'}} />
           </div>
         </header>

         <div className="w3-container w3-content w3-center w3-padding-64" style={{maxWidth: '800px'}} id="band">
           <h2 className="w3-wide">What is Internet Safety?</h2>
           <p className="w3-justify">Internet safety, also known as online safety, refers to the measures taken to protect users from various risks and threats that may arise while using the internet. This can include protecting personal information, avoiding cyberbullying and harassment, avoiding scams and fraud, and avoiding exposure to inappropriate or harmful content. Internet safety involves being aware of the potential risks and taking steps to minimize them. This may include using strong passwords, using antivirus software, avoiding suspicious links and downloads, and being cautious about sharing personal information online. Internet safety is important for all users, including children, who may be particularly vulnerable to online threats. Parents and caregivers play an important role in teaching children how to use the internet safely and responsibly. This can involve setting rules and limits for internet use, monitoring children's online activity, and educating them about online safety.</p>
         </div>

         <hr style={{height: '2px', maxWidth: '600px', color: 'gray', backgroundColor: 'gray', margin: 'auto'}} />

         <div className="w3-container w3-content w3-center w3-padding-64" style={{maxWidth: '800px'}} id="band">
           <h2 className="w3-wide">Scam Sites/Ads</h2>
           <p className="w3-justify">Scam sites and ads refer to websites or advertisements that are designed to deceive people into providing personal information or money. These sites and ads are created by scammers with the intent to steal from unsuspecting victims. Some common examples of scam sites and ads include fake online stores, phishing emails, and pop-up ads that claim to offer free products or services. Scammers often use social engineering tactics to make their scams seem more legitimate, such as using logos and branding that resemble well-known companies or organizations. Scam sites and ads can be dangerous because they can lead to financial loss, identity theft, and other forms of fraud. It's important to be cautious when browsing the internet and to avoid clicking on suspicious links or providing personal information to unknown websites.</p>
           <div class="w3-row w3-padding-32">
           <div class="w3">
             <p></p>
             <img src={scamWebsite} alt="scam website"/>
           </div>
         </div> <div class="w3-container w3-content w3-center w3-padding-64" style="max-width:800px" id="band">
           <h2 class="w3-wide">Ways to Keep Yourself Safe</h2>
              
           <p class="w3-justify">
               Staying safe on the internet is essential to protect your personal information and avoid falling victim to scams or cyber attacks. Here are some ways to stay safe on the internet:
                
               Use strong passwords: Use unique, complex passwords for each of your online accounts, and avoid using the same password across multiple sites.
                
               Keep your software up to date: Keep your computer and mobile device's operating system and apps updated to the latest version to ensure they are secure and protected against known vulnerabilities.
                
               Install antivirus software: Install a reputable antivirus software that can protect your device from malware and other types of cyber threats.
                
              Be cautious when opening emails: Don't open emails or click on links from unknown sources. Be wary of emails that ask for personal information or prompt you to click on a link to a suspicious website.
                
              Check website security: Look for the lock icon in the URL bar and "https" at the beginning of the website address to ensure that the website you are visiting is secure.
                
               Don't share personal information: Be cautious when sharing personal information online. Avoid sharing sensitive information like your social security number or credit card details unless you trust the website or person you are sharing it with.
                
               Use two-factor authentication: Use two-factor authentication whenever possible to add an extra layer of security to your accounts.
                
               Educate yourself: Stay informed about the latest online threats and educate yourself on how to stay safe on the internet.
           </p>
      
           <div class="w3-row w3-padding-32">
             <div class="w3">
               <p></p>
              <img src={security} alt="security"/>s
            </div>
           </div>
         </div>

            
         <div class="w3-row w3-padding-32">
           <div class="w3">
             <p></p>
             <img src={scamWebsite} alt="scam website"/>
           </div>
         </div> <div class="w3-container w3-content w3-center w3-padding-64" style="max-width:800px" id="band">
           <h2 class="w3-wide">Using a VPN</h2>
              
           <p class="w3-justify">
             A VPN (Virtual Private Network) is a tool that creates a secure and encrypted connection between your device and the internet. It allows you to access the internet securely and privately by routing your internet traffic through an encrypted tunnel to a remote server operated by the VPN service. This process hides your IP address and encrypts your online activity, making it difficult for anyone to track your internet usage, steal your data, or spy on your online activity.
            
             VPNs are commonly used to protect your online privacy and security, bypass online censorship and geo-restrictions, and access content that may be blocked in your country. When you use a VPN, your internet traffic is encrypted and routed through the VPN server, which can be located anywhere in the world. This makes it appear as if you are browsing from the location of the VPN server, which can help you to access websites and services that may be blocked or restricted in your country.
            
             Overall, a VPN is a powerful tool that can help you to protect your online privacy and security, and access the internet more freely and securely. However, it's important to choose a reputable VPN provider and to use it properly to ensure maximum protection of your online activities.
           </p>
      
           <div class="w3-row w3-padding-32">
             <div class="w3">
               <p></p>
               <img src={vpn} alt="vpn"/>
             </div>
           </div>
       </div>
     </div>
   </div>
   </div>
   </div>
  
   );
 }

function Info() {
  return(
    <div></div>
  )
}

export default Info;
