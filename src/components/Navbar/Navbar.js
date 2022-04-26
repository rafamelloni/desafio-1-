export default function Navbar() {
   const headerStyles = {
       display: "flex",
       flexWrap: "wrap",
       justifyContent: "space-between",
       listStyle: "none",
       backgroundColor: "red",
   }
   
   
    return ( 
    <header className="header">
    <div className="Logo"> logo</div>  
         <ul className="links" style={headerStyles}>
             <li>
productos
             </li>
             <li>
                 Inicio
             </li>
             <li>
                 Perfil
             </li>
             <li>
                 contactarme
             </li>
         </ul>
       
     </header>
    )
}