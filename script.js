document.getElementById("sec").style.display = "none";

document.getElementById("btn").addEventListener("click" , ()=>{
         document.getElementById("sec").style.display = "block";
         document.getElementById("one").innerHTML = `(a + b + c)/2`;
         document.getElementById("two").innerHTML = `(${parseInt(document.getElementById("a").value)} + ${parseInt(document.getElementById("b").value)} + ${parseInt(document.getElementById("c").value)})/2`;
         document.getElementById("three").innerHTML = `(${parseInt(document.getElementById("a").value) + parseInt(document.getElementById("b").value) + parseInt(document.getElementById("c").value)})/2`;
         document.getElementById("four").innerHTML = `${(parseInt(document.getElementById("a").value) + parseInt(document.getElementById("b").value) + parseInt(document.getElementById("c").value))/2}`;
         s = (parseInt(document.getElementById("a").value) + parseInt(document.getElementById("b").value) + parseInt(document.getElementById("c").value))/2;
         document.getElementById("five").innerHTML = "s(s-a)(s-b)(s-c)";
         document.getElementById("six").innerHTML = `${s}(${s} - ${parseInt(document.getElementById("a").value)})(${s} - ${parseInt(document.getElementById("b").value)})(${s} - ${parseInt(document.getElementById("c").value)}))`
         document.getElementById("seven").innerHTML = `(${s} X ${s - parseInt(document.getElementById("a").value)}X${s - parseInt(document.getElementById("b").value)}X${s - parseInt(document.getElementById("c").value)})`
         document.getElementById("eight").innerHTML = `${s*(s - parseInt(document.getElementById("a").value))*(s - parseInt(document.getElementById("b").value))*(s - parseInt(document.getElementById("c").value))}`
         document.getElementById("nine").innerHTML = `${(s*(s - parseInt(document.getElementById("a").value))*(s - parseInt(document.getElementById("b").value))*(s - parseInt(document.getElementById("c").value)))**0.5}`
});