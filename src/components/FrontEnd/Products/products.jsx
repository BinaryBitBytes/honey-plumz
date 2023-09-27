function Products() {
    return (
        <section>
            <h2>Here is our Product Selection</h2>
              <div className="card-body">
                  <div className="card">
                <h4 className="card-title">Title</h4>
                <h6 className="card-subtitle text-muted">Subtitle</h6>
              </div>
              <img src="holder.js/100x180/" alt=""></img>
              <div className="card-body">
                <p className="card-text">Text</p>
                <a href="../../../../public/style/Pic/Vapes" className="card-link" >Link 1</a>
                <a href="../../../../public/style/Pic/Vapes" className="card-link">Link 2</a>
              </div>

            </div>
            </section>
        // // Products.this.props
    )
}
export default Products