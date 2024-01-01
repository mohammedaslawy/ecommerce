import "./featured.css"


export const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src="https://images.unsplash.com/photo-1543731068-7e0f5beff43a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFsZGl2ZXN8ZW58MHx8MHx8fDA%3D"alt="" className="featuredImg"/>
        <div className="featuredTitles">
          <h1>Mecca</h1>
          <h2>318 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://media.istockphoto.com/id/1406960186/photo/the-skyline-of-new-york-city-united-states.webp?b=1&s=170667a&w=0&k=20&c=pSGVgYmze-7eDhOt6jr5xgfVKbwDeh969KLEt-isd1A=" alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Los Anglos</h1>
          <h2>659 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://media.istockphoto.com/id/1394926557/photo/harbor-in-antalya-old-town-or-kaleici-in-turkey.webp?b=1&s=170667a&w=0&k=20&c=-fL6wK16wvP8rU546oSc1RVS4hJq9BBiKt0wZsIxZrs=" alt="" className="featuredImg"/>
        <div className="featuredTitles">
          <h1>Antalia</h1>
          <h2>659 Properties</h2>
        </div>
      </div>
    </div>
  )
}
