import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(localStorage.getItem("themeMode") === "dark");
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false); 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 
  const [mobileExpandedItem, setMobileExpandedItem] = useState(null);

  const searchResults = [
    { id: 1, name: "2PC Girl - Embroidered Jacquard Suit", price: "7,895", salePrice: "3,158", img: "https://images.unsplash.com/photo-1621244249243-437b49c5aad9?q=80&w=200" },
    { id: 2, name: "Girl - Printed Jersey Shirt", price: "1,690", salePrice: "676", img: "https://images.unsplash.com/photo-1519235106638-30cc58032644?q=80&w=200" }
  ];

  const toggleDarkMode = () => {
    const newTheme = !darkMode ? "dark" : "light";
    localStorage.setItem("themeMode", newTheme);
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    document.body.classList.toggle("bg-gray-900", darkMode);
    document.body.classList.toggle("bg-white", !darkMode);
  }, [darkMode]);

  const getInitials = () => {
    if (user?.displayName) {
      const names = user.displayName.split(' ');
      return names.length > 1 ? (names[0][0] + names[names.length - 1][0]).toUpperCase() : names[0][0].toUpperCase();
    }
    return user?.email ? user.email[0].toUpperCase() : "?";
  };

  const menuLinks = {
    "SALE": { 
      type: "simple", 
      links: [
        { name: "Flat 20% Off", path: "/sale/flat20" },
        { name: "Flat 30% Off", path: "/sale/flat30" },
        { name: "Flat 50% Off", path: "/sale/flat50" },
        { name: "Clearance Sale", path: "/sale/clearance" },
        { name: "Last Chance", path: "/sale/last-chance" }
      ], 
      img: "/imgs/Luxury-pret.webp" 
    },
    "LUXURY PRET": { 
      type: "simple", 
      links: [
        { name: "Zarish", path: "/luxury-pret/zarish" }, 
        { name: "Zarqash", path: "/luxury-pret/zarqash" }, 
        { name: "Velvet Saga", path: "/luxury-pret/velvet-saga" }, 
        { name: "Festive Wear", path: "/luxury-pret/festive-wear" }, 
        { name: "Wedding Edition", path: "/luxury-pret/wedding-edition" }
      ], 
      img: "/imgs/New-in.webp" 
    },
    "ROZMARA RTW": { 
      type: "simple", 
      links: [
        { name: "Solids", path: "/rozmara-rtw/solids" }, 
        { name: "Embroidered", path: "/rozmara-rtw/embroidered" }, 
        { name: "Prints", path: "/rozmara-rtw/prints" }, 
        { name: "Khaddar", path: "/rozmara-rtw/khaddar" }, 
        { name: "Fusion Pop", path: "/rozmara-rtw/fusion-pop" }
      ], 
      img: "/imgs/Rohani.webp" 
    },
    "KIDS": { 
      type: "columns", 
      sections: [
        { head: "EASTERN", links: [{ name: "Silky Smiles", path: "/kids/silky-smiles" }, { name: "Basics", path: "/kids/basics" }, { name: "Formals", path: "/kids/formals" }] }, 
        { head: "WESTERN", links: [{ name: "Every Day", path: "/kids/everyday" }, { name: "Tops", path: "/kids/tops" }] }
      ],
      img: "/imgs/Kids.webp"
    },
    "ACCESSORIES": { 
      type: "simple", 
      links: [
        { name: "Bags", path: "/accessories/bags" }, 
        { name: "Jewelry", path: "/accessories/jewelry" }, 
        { name: "Stoles", path: "/accessories/stoles" }, 
        { name: "Fragrances", path: "/accessories/fragrances" }, 
        { name: "Shoes", path: "/accessories/shoes" }
      ], 
      img: "/imgs/KK_STUDIO.avif" 
    }
  };

  const getMainPath = (item) => {
    switch (item) {
      case "HOME": return "/";
      case "SALE": return "/sale";
      case "NEW IN": return "/new-in";
      case "SHOP ALL": return "/shop-all";
      case "LUXURY PRET": return "/luxury-pret";
      case "ROZMARA RTW": return "/rozmara-rtw";
      case "KIDS": return "/kids";
      case "ACCESSORIES": return "/accessories";
      default: return "/";
    }
  };

  return (
    <div className="sticky-top shadow-sm" style={{ zIndex: 3000 }} onMouseLeave={() => { setActiveMegaMenu(null); setIsSearchOpen(false); }}>
      <div className="bg-black text-white text-center py-2 text-[10px] uppercase tracking-[0.2em] font-medium">FREE SHIPPING ON ALL ORDERS ABOVE 3500</div>

      <nav className="navbar border-bottom py-3" style={{ backgroundColor: darkMode ? "#1a1a1a" : "#fff" }}>
        <div className="container-fluid d-flex justify-content-between align-items-center px-3 px-md-4">
          <div className="d-lg-none cursor-pointer p-1" onClick={() => setIsMobileMenuOpen(true)}>
            <i className="bi bi-list fs-1" style={{ color: darkMode ? "#fff" : "#000" }}></i>
          </div>

          <Link to="/" className="navbar-brand fw-bold m-0 p-0 font-serif" style={{ letterSpacing: "4px", fontSize: "clamp(24px, 4vw, 32px)", color: darkMode ? "#fff" : "#000" }}>ALZA HMZA</Link>

          {/* --- UPDATED RECTANGLE SEARCH BAR BASED ON SCREENSHOT --- */}
          <div className="d-none d-md-flex flex-grow-1 mx-4 position-relative justify-content-center">
            <div className="position-relative w-100" style={{ maxWidth: '600px' }}>
              <form onSubmit={(e) => e.preventDefault()}>
                <input 
                  className="form-control px-4 py-2 shadow-sm border" 
                  placeholder="Search for products" 
                  value={searchTerm} 
                  onFocus={() => setIsSearchOpen(true)} 
                  onChange={(e) => setSearchTerm(e.target.value)} 
                  style={{ 
                    width: '100%', 
                    borderRadius: '10px', // Adjusted for Rectangle shape with subtle corners
                    backgroundColor: "#fff", 
                    color: "#000", 
                    fontSize: '14px',
                    border: '1px solid #e0e0e0',
                    outline: 'none',
                    paddingRight: '50px'
                  }} 
                />
                <button type="submit" className="position-absolute end-0 top-50 translate-middle-y border-0 bg-transparent pe-4 text-muted">
                  <i className="bi bi-search" style={{ fontSize: '18px' }}></i> 
                </button>
              </form>
              {isSearchOpen && searchTerm.trim() !== "" && (
                <div className="position-absolute bg-white shadow-lg border-0" style={{ top: '100%', width: '100%', left: 0, zIndex: 6000, marginTop: '8px', borderRadius: '8px' }}>
                  {searchResults.map((item) => (
                    <Link key={item.id} to={`/item/${item.id}`} className="d-flex align-items-center p-3 text-decoration-none border-bottom hover-bg-light text-dark">
                      <img src={item.img} alt={item.name} style={{ width: '50px', height: '70px', objectFit: 'cover' }} className="me-3" />
                      <div><p className="m-0 fw-normal mb-1" style={{ fontSize: '12px' }}>{item.name}</p><p className="m-0" style={{ fontSize: '11px' }}><span className="text-muted text-decoration-line-through me-2">PKR {item.price}</span><span className="text-danger fw-bold">PKR {item.salePrice}</span></p></div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="d-flex align-items-center" style={{ gap: 'clamp(15px, 3vw, 30px)' }}>
            <Link to="/wishlist" className="d-none d-lg-block" style={{ color: darkMode ? "#fff" : "#000", fontSize: '20px' }}><i className="bi bi-heart"></i></Link>
            
            <div onClick={() => setIsCartOpen(true)} className="position-relative cursor-pointer" style={{ color: darkMode ? "#fff" : "#000", fontSize: '20px' }}>
              <i className="bi bi-bag"></i><span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '7px', padding: '3px 5px' }}>0</span>
            </div>

            <i onClick={toggleDarkMode} className={darkMode ? "bi bi-sun text-white cursor-pointer" : "bi bi-moon text-dark cursor-pointer"} style={{ fontSize: '20px' }}></i>
            <div className="position-relative">
              <div onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)} className="cursor-pointer d-flex align-items-center justify-content-center"
                   style={user ? { width: '32px', height: '32px', borderRadius: '50%', border: `1px solid ${darkMode ? '#fff' : '#000'}`, fontSize: '13px', fontWeight: 'bold', color: darkMode ? '#fff' : '#000' } : { fontSize: '22px', color: darkMode ? '#fff' : '#000' }}>
                {user ? getInitials() : <i className="bi bi-person"></i>}
              </div>
              {isUserDropdownOpen && (
                <div className="position-absolute end-0 mt-3 shadow-lg rounded border-0 bg-white text-dark overflow-hidden" style={{ minWidth: '180px', top: '100%', zIndex: 4000 }}>
                  <div className="p-3 border-bottom text-center bg-light text-[11px] fw-bold uppercase">{user ? user.email.split('@')[0] : "Guest User"}</div>
                  <div className="list-group list-group-flush text-[11px]">
                    <Link to="/wishlist" className="list-group-item list-group-item-action py-3 border-0 d-lg-none" onClick={() => setIsUserDropdownOpen(false)}>Wishlist</Link>
                    <Link to="/profile" className="list-group-item list-group-item-action py-3 border-0" onClick={() => setIsUserDropdownOpen(false)}>Profile</Link>
                    <button onClick={() => user ? logout() : navigate("/login")} className="list-group-item list-group-item-action py-3 border-0 text-danger fw-bold">{user ? "Logout" : "Login"}</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* --- CART SIDEBAR UI --- */}
      <div style={{ position: 'fixed', top: 0, right: isCartOpen ? 0 : '-400px', width: 'min(350px, 90%)', height: '100vh', backgroundColor: darkMode ? '#1a1a1a' : '#fff', zIndex: 6000, transition: '0.4s ease-in-out', boxShadow: '-5px 0 15px rgba(0,0,0,0.1)', color: darkMode ? '#fff' : '#000' }}>
        <div className="p-4 d-flex flex-column h-100">
          <div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-4"><h5 className="m-0 fw-bold tracking-widest text-uppercase">Shopping Bag (0)</h5><i className="bi bi-x-lg cursor-pointer" onClick={() => setIsCartOpen(false)} style={{ fontSize: '20px' }}></i></div>
          <div className="flex-grow-1 text-center d-flex flex-column justify-content-center opacity-50"><i className="bi bi-bag-x mb-3" style={{ fontSize: '50px' }}></i><p className="tracking-widest" style={{ fontSize: '11px' }}>YOUR BAG IS CURRENTLY EMPTY.</p></div>
          <div className="border-top pt-4"><div className="d-flex justify-content-between mb-4"><span className="fw-bold">SUBTOTAL</span><span className="fw-bold">PKR 0</span></div><button className="btn btn-dark w-100 rounded-0 py-3 mb-2 tracking-widest text-xs">VIEW BAG</button><button className="btn btn-outline-dark w-100 rounded-0 py-3 tracking-widest text-xs">CHECKOUT</button></div>
        </div>
      </div>

      {/* MOBILE MENU SIDEBAR */}
      <div style={{ position: 'fixed', top: 0, left: isMobileMenuOpen ? 0 : '-100%', width: 'min(320px, 90%)', height: '100vh', backgroundColor: darkMode ? '#1a1a1a' : '#fff', zIndex: 6000, transition: '0.4s ease-in-out', boxShadow: '5px 0 15px rgba(0,0,0,0.1)', color: darkMode ? '#fff' : '#000', overflowY: 'auto' }}>
        <div className="p-4">
          <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-3"><h5 className="fw-bold tracking-widest m-0">MENU</h5><i className="bi bi-x-lg fs-4 cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}></i></div>
          <div className="d-flex flex-column gap-3 text-uppercase fw-semibold tracking-widest">
            {["HOME", "SALE", "NEW IN", "SHOP ALL", "LUXURY PRET", "ROZMARA RTW", "KIDS", "ACCESSORIES"].map((item, i) => (
              <div key={i} className="border-bottom pb-2">
                <div className="d-flex justify-content-between align-items-center cursor-pointer py-2" onClick={() => {
                  if (menuLinks[item]) { setMobileExpandedItem(mobileExpandedItem === item ? null : item); } 
                  else { navigate(getMainPath(item)); setIsMobileMenuOpen(false); }
                }}>
                  <span style={{ color: item === "SALE" ? "red" : "inherit" }}>{item}</span>
                  {menuLinks[item] && <i className={`bi bi-chevron-${mobileExpandedItem === item ? 'up' : 'down'}`} style={{ fontSize: '12px' }}></i>}
                </div>
                {mobileExpandedItem === item && menuLinks[item] && (
                  <div className="mt-2 bg-light p-3 rounded">
                    <img src={menuLinks[item].img} className="img-fluid rounded mb-3 shadow-sm" style={{ height: '140px', width: '100%', objectFit: 'cover' }} alt="" />
                    <div className="d-flex flex-column gap-2 text-dark">
                      {menuLinks[item].type === "columns" ? menuLinks[item].sections.map(sec => (
                        <div key={sec.head} className="mb-2"><p className="fw-bold text-danger mb-1 border-bottom" style={{ fontSize: '10px' }}>{sec.head}</p>{sec.links.map(l => <Link key={l.name} to={l.path} className="d-block text-dark opacity-75 text-decoration-none py-1" style={{ fontSize: '12px' }} onClick={() => setIsMobileMenuOpen(false)}>{l.name}</Link>)}</div>
                      )) : menuLinks[item].links.map((link, j) => (
                        <Link key={j} to={link.path} className="d-block text-dark opacity-75 text-decoration-none py-1" style={{ fontSize: '12px' }} onClick={() => setIsMobileMenuOpen(false)}>{link.name}</Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DESKTOP NAV */}
      <nav className={`navbar border-bottom py-2 d-none d-lg-block ${darkMode ? 'bg-dark' : 'bg-white'}`}>
        <div className="container justify-content-center position-relative">
          <ul className="navbar-nav d-flex flex-row gap-5 text-uppercase fw-semibold tracking-widest" style={{ fontSize: "11px" }}>
            {["HOME", "SALE", "NEW IN", "SHOP ALL", "LUXURY PRET", "ROZMARA RTW", "KIDS", "ACCESSORIES"].map((item, idx) => (
              <li key={idx} className="nav-item mx-2" onMouseEnter={() => menuLinks[item] ? setActiveMegaMenu(item) : setActiveMegaMenu(null)}>
                <Link className="nav-link" to={getMainPath(item)} style={{ color: item === "SALE" ? "red" : (darkMode ? "#fff" : "#000") }}>{item}</Link>
              </li>
            ))}
          </ul>
          {activeMegaMenu && (
            <div className="position-absolute bg-white shadow-lg border-0 rounded-0" style={{ top: '100%', width: '850px', left: '50%', transform: 'translateX(-50%)', zIndex: 5000, color: '#000', marginTop: '1px', minHeight: '380px' }}>
              <div className="d-flex p-5 gap-5">
                <div className="position-relative" style={{ width: '300px' }}><img src={menuLinks[activeMegaMenu].img} alt="Menu" className="img-fluid rounded-0 shadow-sm" style={{ height: '320px', objectFit: 'cover', width: '100%' }} /><div className="bg-white p-3 position-absolute bottom-0 start-50 translate-middle-x mb-4 shadow-sm fw-bold w-75 text-center" style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', border: '1px solid #eee' }}>{activeMegaMenu}</div></div>
                <div className="flex-grow-1">
                  <div className="row">
                    {menuLinks[activeMegaMenu].type === "columns" ? menuLinks[activeMegaMenu].sections.map((sec, i) => (
                      <div key={i} className="col-6 px-4 text-start"><p className="text-dark fw-bold mb-4 pb-2 border-bottom text-[10px] tracking-[0.2em]">{sec.head}</p><div className="d-flex flex-column gap-3">{sec.links.map(l => <Link key={l.name} to={l.path} className="text-decoration-none nav-link-custom" style={{ fontSize: '13px', color: '#444' }} onClick={() => setActiveMegaMenu(null)}>{l.name}</Link>)}</div></div>
                    )) : (
                      <div className="col-12 px-4">
                        <div className="row g-4 text-start">
                          {menuLinks[activeMegaMenu].links.map((link, idx) => (
                            <div key={idx} className="col-6"><Link to={link.path} className="text-decoration-none nav-link-custom" style={{ fontSize: '13px', color: '#444' }} onClick={() => setActiveMegaMenu(null)}>{link.name}</Link></div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      <style>{`.nav-link-custom:hover { color: red !important; transform: translateX(5px); transition: 0.2s; }`}</style>
      {(isCartOpen || isMobileMenuOpen) && <div onClick={() => { setIsCartOpen(false); setIsMobileMenuOpen(false); setMobileExpandedItem(null); }} style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.4)', zIndex: 5500 }}></div>}
    </div>
  );
}

export default Navbar;