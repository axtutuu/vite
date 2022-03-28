function CookieView () {
  const getCookie = () => {
    console.info(document.cookie)
    alert(document.cookie)
  }

  return (
    <div>
      <h1>CookieView</h1>
      <button onClick={getCookie}>Get Cookie</button>
    </div>
  )
}

export default CookieView