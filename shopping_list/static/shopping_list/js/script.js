const new_item = () => {
    const data = {
        name: document.getElementById("item_name").value,
        list: document.getElementById("data_container").dataset.list_id
    }
    fetch("/api/item/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": getCookie("csrftoken"),
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(response => {
                document.getElementById("items").innerHTML +=
                    '<list-element ' +
                    'id="item-' + response.payload.id + '"' +
                    'data-text="' + data.name + '" ' +
                    'data-id="' + response.payload.id + '"' +
                    '></list-element>'
            }
        )
}

const remove_item = (id) => {
    console.log(id)
    const data = {
        id: id
    }
    fetch("/api/item/", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": getCookie("csrftoken"),
        },
        body: JSON.stringify(data),
    })

    document.getElementById(`item-${id}`).remove()
}

const rename_list = () => {
    const data = {
        list: document.getElementById("data_container").dataset.list_id,
        title: document.getElementById("list_name").value
    }
    document.getElementById("data_container").dataset.list_title = data.title
    fetch("/api/list/", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": getCookie("csrftoken"),
        },
        body: JSON.stringify(data),
    })
}

const getCookie = (name) => {
    if (document.cookie && document.cookie !== "") {
        const cookies = document.cookie.split(";")
        let cookieValue
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim()
            if (cookie.startsWith(name + "=")) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1))
                break
            }
        }
        return cookieValue
    } else return null
}