function cart() {
    return(
    <div className="cart">
        <section>
            <div>
                <h3>Your Cart:</h3>
                    <div>
                        <table>
                            <div>
                                <colgroup span="2" >
                                    <div style={{background: "red" }}>
                                        <div>
                                            <col style={{background:"yellow"}}>
                                            1 
                                            </col>
                                        </div>
                                        <div>
                                            <col>
                                            2
                                            </col>
                                        </div>
                                    </div>
                                </colgroup> 
                            </div>  
                        </table> 
                    </div>
            </div>
        </section>
    </div>
    )
}

export default cart;