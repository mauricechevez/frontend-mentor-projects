// All Unreads
const unread = document.querySelectorAll('.unread')
// Write Unread number to HTML
const unreadAmount = document.getElementById('unread-amount')
unreadAmount.innerText = unread.length;

// Remove unread notification
document.getElementById('mark-all-read').addEventListener('click',markRead)

function markRead(){
  unread.forEach(msg =>{
    msg.classList.remove('unread')
    // Remove number from page
    unreadAmount.style.display = 'none'
  })
}