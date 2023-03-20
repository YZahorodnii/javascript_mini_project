const userId = new URL(location.href);
let id = userId.searchParams.get('id');
const url = new URL('https://jsonplaceholder.typicode.com/users/' + `${id}`);
fetch(url).then(response => response.json()).then(user => {

    let wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    let details = document.createElement('div');
    details.classList.add('details');
    details.innerText = `Id: ${user.id}
                         Name: ${user.name};
                         Username: ${user.username};
                         Email: ${user.email};
                         Phone: ${user.phone};
                         Website: ${user.website};
                         Addres: ${user.address.city}, ${user.address.street} street, ${user.address.suite}, zipCode:${user.address.zipcode}, GeoLat:${user.address.geo.lat}, GeoLng:${user.address.geo.lng};
                         Company: ${user.company.name}, Bs: "${user.company.bs}", catchPhrase: "${user.company.catchPhrase}";
                         `
    let btn = document.createElement('button');
    btn.classList.add('btnPostTitles');
    btn.innerText = 'Posts of current user';

    wrapper.append(details, btn);
    document.body.appendChild(wrapper);

    btn.onclick = function () {
        let USER_ID = id;
        let url = new URL('https://jsonplaceholder.typicode.com/users/' + `${USER_ID}` + '/posts');
        fetch(url).then(data => data.json()).then(posts => {

            let postTitles = document.createElement('div');
            postTitles.classList.add('postTitles');
            document.body.appendChild(postTitles);
            for (const post of posts) {
                let a = document.createElement('a');
                a.href = 'post-details.html?titleId=' + `${post.id}`;
                let title = document.createElement('div');
                title.classList.add('title');
                a.innerText = `${post.title}`;
                title.appendChild(a);
                postTitles.appendChild(title);
            }

        });


        btn.disabled = 'disabled';
    }
});
