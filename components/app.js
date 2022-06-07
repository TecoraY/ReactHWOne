class Sidebar extends React.Component{
    render(){
    return(
        <div style={{textAlign:"left",border:"solid", width:"150px", height:"100vh",}}>
            <h2>Dashboard</h2>
            <h3> Widget</h3>
            <h3> Reviews</h3>
            <h3>Customers</h3>
            <h3>Online Analysis</h3>
            <h3>Settings</h3>
        </div>
    );
    } 
}
class Reviews extends React.Component{
    render(){
        return(
            <div style={{textAlign: "center",border:"solid",width:"250px", marginLeft: "175px",marginTop:"-715px"}}>
                <h3> Reviews</h3>
                <h2>1,281</h2>
            </div>
        );
    }
}
class Ratings extends React.Component{
    render(){
        return(
            <div style={{border: "solid", width:"250px", marginLeft: "450px",marginTop:"-112px", textAlign:"center",}}>
                <h3>Average Rating</h3>
                <h2>4.6</h2>
            </div>
        );
    }
}
class Analysis extends React.Component{
    render(){
        return(
            <div style={{border:"solid", width:"250px",marginLeft:"725px", marginTop:"-112px", textAlign:"center",}}>
                <h3>Sentiment Analysis</h3>
                <h2>960
                    122
                    321
                </h2>
            </div>
        );
    }
}
class Visitors extends React.Component{
    render(){
        return(
            <div style={{border:"solid",marginLeft:"175px", width:"800px", height:"598px"}}>
                <h3>Website Visitors</h3>
                <h2>821</h2>
            </div>
        );
    }
}

//below the <header/> tag is calling a component within a component.
/*class App extends React.Component{
    render(){
        return(
        <div>
            <Sidebar/>
            <Reviews/>
            <Ratings/>
            <Analysis/>
            <Visitors/>
        </div>
        );
    }
}*/
ReactDOM.render( <Sidebar/>,
    document.querySelector(".sidebar")
  );
ReactDOM.render( <Reviews/>,
    document.querySelector(".reviews")
  );
ReactDOM.render(<Ratings/>, 
    document.querySelector(".ratings")
);
ReactDOM.render( <Analysis/>,
    document.querySelector(".analysis")
  );
ReactDOM.render( <Visitors/>,
    document.querySelector(".visitors")
  );