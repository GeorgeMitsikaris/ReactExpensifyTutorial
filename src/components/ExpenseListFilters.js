import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, shortByAmount, shortByDate, setStartDate, setEndDate} from '../actions/filters';

export class ExpenseListFilters extends React.Component{
    state = {
        calendarFocused: null
    }

    onDatesChange = ({startDate, endDate}) =>{
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }

    onFocusChange = (calendarFocused) =>{
        this.setState(() => ({calendarFocused}));
    }

    onTextChange = (e)=>{
        this.props.setTextFilter(e.target.value)
    }

    onSortChange = (e)=>{
        if(e.target.value === 'amount'){
            this.props.sortByAmount();
        }
        else{
            this.props.sortByDate();
        }
    }

    render(){
        return(
            <div>
            <input type="text" value={this.props.filters.text} onChange={this.onTextChange} /><br/>
            <select
                value={this.props.filters.sortBy}
                onChange={this.onSortChange}>
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>
            <DateRangePicker
                startDate={this.props.filters.startDate}
                endDate={this.props.filters.endDate}
                onDatesChange={this.onDatesChange}
                focusedInput={this.state.calendarFocused}
                onFocusChange={this.onFocusChange}
                numberOfMonths={1}
                isOutsideRange={()=>false}
                showClearDates={true}
            />
        </div> 
        )
    }
}

const mapDispatchToProps = dispatch => ({
    setTextFilter: text => dispatch(setTextFilter(text)),
    setStartDate: date => dispatch(setStartDate(date)),
    setEndDate: date => dispatch(setEndDate(date)),
    sortByAmount: () => dispatch(sortByAmount()),
    sortByDate: () => dispatch(sortByDate()) 
})

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

const connectedExpenseListFilters = connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);

export default connectedExpenseListFilters;