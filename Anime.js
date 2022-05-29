const tk = document.getElementById("charectersList");


const ganaratecode = async() => {
    try {

        const res = await fetch('https://api.jikan.moe/v4/anime');
        const data = await res.json();




        for (let i = 0; i < data.data.length; i++) {
            const url = data.data[i].images.jpg.image_url;
            const name = data.data[i].title;










            const list = document.createElement("li");
            list.setAttribute("class", "character")
            list.setAttribute("id", "list")


            const div = document.createElement("div");
            div.setAttribute("class", "image-size");
            div.setAttribute("id", "char")

            const imag = document.createElement("img");
            imag.src = `${url}`;


            div.append(imag);

            const text = document.createElement("h2");
            text.innerHTML = `${name}`;


            div.append(text);



            list.appendChild(div);

            tk.append(list)









            var modal = document.getElementById("myModal");
            const name1 = document.getElementById("name");
            const episodes = document.getElementById('episodes');
            const duration = document.getElementById('duration');
            const score = document.getElementById('score');
            const reak = document.getElementById('reak');
            const member = document.getElementById('member');
            const year = document.getElementById('year');
            const title = document.getElementById('name1');
            const synopsis = document.getElementById('synopsis');

            // broacastion********************

            const day = document.getElementById('day');
            const time = document.getElementById('time');
            const timezone = document.getElementById('timezone');
            const string = document.getElementById('string');
            const video = document.getElementById('video');






            // Get the image and insert it inside the modal - use its "alt" text as a caption

            var modalImg = document.getElementById("img01");
            //var captionText = document.getElementById("caption");
            imag.onclick = function() {

                modal.style.display = "block";


                modalImg.src = data.data[i].images.jpg.image_url;
                //captionText.innerHTML = data.data[i].title;
                name1.innerText = data.data[i].title;
                title.innerText = data.data[i].title;
                episodes.innerText = data.data[i].episodes;
                duration.innerHTML = data.data[i].duration;
                score.innerHTML = data.data[i].score;
                reak.innerHTML = data.data[i].rank;
                member.innerHTML = data.data[i].members;
                year.innerHTML = data.data[i].year;
                synopsis.innerHTML = data.data[i].synopsis;

                string.innerText = data.data[i].broadcast.string;
                day.innerText = data.data[i].broadcast.day;
                time.innerText = data.data[i].broadcast.time;
                timezone.innerText = data.data[i].broadcast.timezone;
                video.src = data.data[i].trailer.embed_url;

            }

            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];




            // When the user clicks on <span> (x), close the modal
            span.onclick = function() {
                modal.style.display = "none";

                video.src = null;




            }



        }
    } catch (err) {

        console.log(`error id is ${err}`);

    }
};




ganaratecode()



// **************************search function **************************

function myFunction() {

    var input, filter, div, li, a, txtValue;

    input = document.getElementById("myinput")
    filter = input.value.toUpperCase();

    div = document.getElementById('main');
    li = div.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("h2")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }


    // fack




}