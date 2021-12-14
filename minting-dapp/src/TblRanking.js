import './css/DataTables.css'
import React, {Component} from 'react'

const $ = require('jquery')
$.DataTable = require('datatables.net')

export class TblRanking extends Component{
    componentDidMount(){
        console.log(this.el)
        this.$el = $(this.el)
        this.$el.DataTable(
           {
               data: this.props.data,
               
               columns: [
                   {title: "ID"},
                   {title: "Rank"},
                   {title: "Level"},
                   {title: "Link"}

               ],
               columnDefs: [
                   {
                       targets: 3,
                       render: function(data) {
                           return '<a href="https://marketplace.kalao.io/collection/0x0b8877c54b1dd0731ca6335005062dde6fcb3709/">"<img src="/config/images/attributes/'+ data +'" style="width:80px;height:80px;"> </a>'
                       }

                   }
               ]
           } 
        )
    }
    componentWillUnmount(){


    }
    render() {
        return <table 
                className="display" width="100%" hover="true" ref={el => this.el = el}>
            </table>

    }
}