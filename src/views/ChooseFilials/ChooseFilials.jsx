import React, {Component} from 'react';

class ChooseFilials extends Component {
    render() {
        return (
            <div className="content">
                <h2 className="custom-header-h2 custom-dashboard-header">
                    <span className="uppercase">{this.props.title}</span>
                    <div className="custom-select col-md-4">
                        <label className="col-md-5 choose-label-txt" htmlFor="sel1">Выберите филиал:</label>
                        <select className="form-control col-md-7" onChange={this.props.filterProductsByBranch && this.props.filterProductsByBranch} id="sel1">
                            {
                                this.props.filials && this.props.filials.map(filial => {
                                    return <option key={filial.sub_market_id}>{filial.sub_market_name}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className="clearfix"></div>
                </h2>
            </div>
        );
    }
}

export default ChooseFilials;