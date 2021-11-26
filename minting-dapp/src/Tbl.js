import './css/DataTables.css'
import React, {Component} from 'react'

const $ = require('jquery')
$.DataTable = require('datatables.net')

export class Tbl extends Component{
    componentDidMount(){
        console.log(this.el)
        this.$el = $(this.el)
        this.$el.DataTable(
           {
               data: this.props.data,
               
               columns: [
                   {title: "Attribute"},
                   {title: "Level"},
                   {title: "Probability"},
                   {title: "Example"}

               ],
               columnDefs: [
                   {
                       targets: 3,
                       render: function(data) {
                           return '<img src="/config/images/attributes/'+ data +'" style="width:40px;height:40px;">'
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