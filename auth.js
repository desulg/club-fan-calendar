/* Public prototype accounts. This is a browser-only walkthrough, not server authentication. */
const DemoAuth = (() => {
  const teams = {
    kalev: {name:'Bigbank Kalev', primary:'#044771', accent:'#044771', logo:'assets/bigbank-kalev.svg'},
    taltech: {name:'TalTech/ALEXELA', primary:'#34233f', accent:'#aa1352', logo:'assets/taltech-alexela.webp'}
  };
  const accounts = {kalev:'Kalev2026!', taltech:'Taltech2026!'};
  function session(){try{const id=sessionStorage.getItem('calendar-demo-session');return Object.hasOwn(teams,id)?id:null}catch{return null}}
  function login(user,password){const id=user.trim().toLowerCase();if(!Object.hasOwn(accounts,id)||accounts[id]!==password)return false;sessionStorage.setItem('calendar-demo-session',id);return true}
  function logout(){sessionStorage.removeItem('calendar-demo-session');location.assign('login.html')}
  return {teams,session,login,logout};
})();
