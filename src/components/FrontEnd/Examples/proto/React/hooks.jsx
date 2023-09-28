// function StatusBar() {
//   const isOnline = useOnlineStatus();
//   return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
// }
//! let StatBar 
//! const mod.saveBTN = import module {__SAVEBUTTON}
//! StatBar = {StatusBar};

//! {
//     let useOnlineStatus;

//         const __SAVEBUTTON= SaveButton => {
//         let isOnline = useOnlineStatus();

//         function handleSaveClick() {
//             console.log('✅ Progress saved');
//         }
        
//         return (
//             <button disabled={!isOnline} onClick={handleSaveClick}>
//             {isOnline ? 'Save progress' : 'Reconnecting...'}
//             </button>
//         );
//         }
//!         module.exports = __SAVEBUTTON
//! }
//! var SaveBtn = {SaveButton};
//! export default  SaveBtn && StatBar