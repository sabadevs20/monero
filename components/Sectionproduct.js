import {excuteQuery} from "../lib/db";

export default function Product({product}) {

  console.log(product);
  if (!product) return <p>Something went wrong....</p>
  return <div> 
      
  <main style={{marginTop:"-440px"}} className="col-md-0 ms-sm-auto col-lg-10 px-md-0">
  <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <h1 className="h2">Dashboard</h1>
    <div className="btn-toolbar mb-2 mb-md-0">
      <div className="btn-group me-2">
        <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
        <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
      </div>
      <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
        <span data-feather="calendar"></span>
        This week
      </button>
    </div>
    </div>
  </main>  
             
                  {
                        // render posts here
                        product.map(
                        (item)=> <>

<div className="table-responsive">
    <table className="table table-striped table-sm">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">item.</th>
          <th scope="col">Header</th>
          <th scope="col">Header</th>
          <th scope="col">Header</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{item.product_id}</td>
          <td>{item.underwriter}</td>
          <td>{item.coverage}</td>
          <td>{item.uniqueidentifier}</td>
          <td>{item.time}</td>
        </tr>
        
      </tbody>
    </table>
  </div>
                                    
                                  </>
                    )

                  }
          </div>
}






export async function getStaticProps(context) {

  try {
      const results = await excuteQuery({
          query:'SELECT * FROM `itbl_quote` ORDER BY `uniq_id` ASC'
      });
    
      let product = JSON.parse(JSON.stringify(results))
      console.log(product)
      return {
          props: {product} // will be passed to our blog page component as props
          };
    } catch (e) {
      res.status(500).json({ message: e.message });
      return {props: {product:false}} 
    }
  };

