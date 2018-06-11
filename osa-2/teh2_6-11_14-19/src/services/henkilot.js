import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = (person) => {
  const request = axios.post(baseUrl, person)
  return request.then(response => response.data)
}

const update = (id, person) => {
  const request = axios.put(`${baseUrl}/${id}`, person)
  return request.then((response) => {
    if (response.status === 200) {
      return true;
    }
  })
  .catch((error) => {
    alert('Henkilö ' + person.name + ' on jo poistettu luettelosta');
    return false;
  })
}

const remove = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => {
    return getAll();
  })
}

export default { getAll, create, update, remove }
