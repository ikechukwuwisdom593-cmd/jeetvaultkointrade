
const defaultPlans = `
🚀 Starter Plan — 10% ROI in 7 Days
💎 Silver Plan — 25% ROI in 14 Days
🔥 Gold Plan — 50% ROI in 30 Days
👑 VIP Plan — 100% ROI in 60 Days
`;

if(!localStorage.getItem('plans')){
    localStorage.setItem('plans', defaultPlans);
}

function loadPlans(){
    const plans = localStorage.getItem('plans');
    document.getElementById('plansContainer').innerText = plans;
    document.getElementById('plansInput').value = plans;
}

function showSection(id){
    document.querySelectorAll('.section').forEach(sec=>{
        sec.classList.remove('active');
    });

    document.getElementById(id).classList.add('active');
}

function adminLogin(){
    const password = prompt("Enter Admin Password");

    if(password === "admin123"){
        alert("Admin Access Granted");

        document.querySelectorAll('.admin-box').forEach(box=>{
            box.style.display = "block";
        });
    }else{
        alert("Incorrect Password");
    }
}

function savePlans(){
    const newPlans = document.getElementById('plansInput').value;
    localStorage.setItem('plans', newPlans);
    loadPlans();
    alert("Plans Updated");
}

function saveDeposit(){
    const value = document.getElementById('depositInput').value;
    document.getElementById('depositAmount').innerText = value;
    alert("Deposit Updated");
}

function saveProfit(){
    const value = document.getElementById('profitInput').value;
    document.getElementById('profit').innerText = value;
    alert("Profit Updated");
}

loadPlans();
