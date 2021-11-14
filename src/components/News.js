import React, { Component } from 'react'

import Newsitem from './Newsitem';
import PropTypes from 'prop-types'














export class News extends Component {



    static defaultProps = {
        category: "general",
        country: 'in'
    }
    static propTypes = {
        category: PropTypes.string,
        country: PropTypes.string
    }







   



    
    constructor(props) {
        super(props);
        this.state = {
            articles : [],
           
        
        


        }
        document.title = `${this.props.category}- by Grabnewzz`
    }


    async componentDidMount() {
        this.props.setProgress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dcfa7d83a4474334b61c00616d5f6d98&pagesize=30`
        let data = await fetch(url)
        this.props.setProgress(30)
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
          
     
        })
        this.props.setProgress(100)
    }
    




    render() {


        return (


            

            <div className="container my-3" >


        
                <li id="line"></li>
                <div id="head">

                    <h1>GRABNEWZZ-TOP <span style={{ color: "red" }}> {this.props.category}</span> HEADLINES   </h1>
                </div>
               






                    <div className="container" style={{marginLeft:"100px",marginTop:"50px"}}>

                        <div className="row">
                            {this.state.articles.map((element) => {
                                return <div className="col-md-4 my-2" key={element.url}>
                                    <Newsitem title={element.title} description={element.description} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} />
                                </div>
                            })}

                        </div>



                    </div>





           
            </div >




            
            
        )



    }


}
export default News
