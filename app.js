document.addEventListener("DOMContentLoaded", function() {
let submitButton=document.getElementById("submit");
let form=document.getElementById("mainForm");


form.addEventListener("submit",(event)=>{
    event.preventDefault();
    displayUserData();
    this.reset();
    
})


function displayUserData(){
    let fisrtName=document.getElementById("firstName").value;
    let lastName=document.getElementById("lastName").value;
    let gender=document.getElementById("gender").value;
    let date=document.getElementById("date").value;
    let phone=document.getElementById("phone").value;
    let email=document.getElementById("email").value;
    let address=document.getElementById("address").value;
    let imagePath
    if (gender=="Male") {
        imagePath="male";
    }else if (gender=="Female")
    {
        imagePath="female"
    }
    else{
    imagePath="person"
    }
    
    let userCard=document.getElementById("userCard");
    let card=document.createElement("newCard");
    card.classList.add('card','col-lg-3','col-8','m-5','newCard','shadow');
    card.innerHTML=`
    <img src="assets/${imagePath}.png" class="card-img-top p-2" alt="person">
    <div class="card-body">
      <h5 class="card-title">Full name</br>
        <h3 id="fullname"><b>${fisrtName} ${lastName}</b></h3>
      </h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Gender</br>
        <p id="gender"><b>${gender}</b></p>
      </li>
      <li class="list-group-item">Date of birth</br>
        <p id="dateofbirth"><b>${date}</b></p>
      </li>
      <li class="list-group-item">Phone number</br>
        <p id="phone"><b>${phone}</b></p>
      </li>
      <li class="list-group-item">Address</br>
        <p id="address"><b>${address}</b></p>
      </li>
    </ul>
    <div class="card-body">
      <a href="" class="card-text" id=""><b>${email}@example.com</b></a>
    </div>
    `;
    userCard.appendChild(card);
}

const resetForm=()=>{
    document.getElementById('mainForm').reset();
}

}
);
