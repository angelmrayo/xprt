var MiComponente = React.createClass({
    obtenerProductos: function () {
        var xhr = new XMLHttpRequest();
        xhr.open('get', 'http://services.odata.org/V4/Northwind/Northwind.svc/Products', true);
        xhr.onload = function () {
            var datos = JSON.parse(xhr.responseText);
            this.setState({ productos: datos });
        }.bind(this);
        xhr.send();
    },
    getInitialState: function () {
        return {productos: []}
    },
    componentDidMount: function () {
        this.obtenerProductos();
    },
    render: function () {
        var prods = this.state.productos.map(function (pr) {
            return (<tr><td>{pr.ProductID}</td><td>{pr.ProductName}</td><td>{pr.UnitPrice} €</td></tr>)
        });
            return (
                <div>
                    <div>Mi componente React en ASP.NET MVC</div>
                    <div>Hay {this.state.productos.length} productos</div>
                    <table className="table table-responsive">
                        {prods}
                    </table>

                </div>
        );
    }
});

ReactDOM.render(<MiComponente />, document.getElementById('contenido'));