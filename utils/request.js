const token = ""

// const baseUrl = "http://api.pc.haodanxia.com"
const baseUrl = "https://api_pc.rmzj.me"

function formatParams(data) {
  var params = "";

  for (const key in data) {
    params += `${key}=${data[key]}&`;
  }

  return params
}

const get = async function (data) {
  var getUrl = baseUrl + data.url;

  if (data.params) {
    getUrl += "?" + formatParams(data.params)
  }

  const res = await $fetch(getUrl, {
    headers: {
      "Authorization": token
    },
    method: "GET",
  })

  return res
}

const post = async function (data) {
  const res = await $fetch(baseUrl + data.url, {
    headers: {
      "Authorization": token
    },
    body: data.data,
    method: "POST",
  })

  return res
}

export { get, post }