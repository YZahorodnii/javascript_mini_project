let url = new URL(location.href);
let titleId = url.searchParams.get('titleId');
let urlId = new URL('https://jsonplaceholder.typicode.com/posts/' + `${titleId}`)

fetch(urlId).then(value => value.json()).then(value => {
    let post = document.createElement('div');
    post.classList.add('post');
    post.innerText = `User id: ${value.userId};
                      Id: ${value.id}; 
                      Title: ${value.title};
                      Body: ${value.body}.`
    document.body.appendChild(post);

    let POST_ID = value.id;
    let urlComment = new URL('https://jsonplaceholder.typicode.com/posts/' + `${POST_ID}` + '/comments');

    fetch(urlComment).then(data => data.json()).then(data => {
        let comments = document.createElement('div');
        comments.classList.add('comments');
        comments.innerHTML = '<p>COMMENTS:</p>';
        for (const comment of data) {
            let commentBox = document.createElement('div');
            commentBox.classList.add('commentBox');
            commentBox.innerText = `PostId: ${comment.postId};
                                    Id: ${comment.id};
                                    Name: ${comment.name};
                                    Email: ${comment.email};
                                    Body: ${comment.body}.`
            comments.appendChild(commentBox);
        }
        document.body.appendChild(comments)

    })
});
