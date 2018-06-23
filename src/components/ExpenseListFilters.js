import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters'
import InputMoment from 'input-moment'
import 'input-moment/dist/input-moment.css'
import moment from 'moment'

class ExpenseListFilters extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            startDate: moment(this.props.filters.startDate),
            endDate: moment(this.props.filters.endDate),
            startDateFocus: false,
            endDateFocus: false
        }
    }

    startDateOnSave = () => {
        this.setState({ startDateFocus: !this.state.startDateFocus })
        this.props.dispatch(setStartDate(this.state.startDate.valueOf()))
    }

    startDateOnChange = (e) => {
        this.setState({startDate: e})
        this.props.dispatch(setStartDate(this.state.startDate.valueOf()))
    }

    endDateOnSave = () => {
        this.setState({ endDateFocus: !this.state.endDateFocus })
        this.props.dispatch(setEndDate(this.state.endDate.valueOf()))
    }

    endDateOnChange = (e) => {
        this.setState({ endDate: e })
        this.props.dispatch(setEndDate(this.state.endDate.valueOf()))
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="search now..."
                    value={this.props.filters.text}
                    onChange={e => {
                        this.props.dispatch(setTextFilter(e.target.value))
                    }}
                />
                <select
                    value={this.props.filters.sortBy}
                    onChange={(e) => {
                        if (e.target.value === 'date') {
                            this.props.dispatch(sortByDate())
                        } else if (e.target.value === 'amount') {
                            this.props.dispatch(sortByAmount())
                        }
                    }}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>

                <span>Start Date:</span>
                <input
                    type="text"
                    value={moment(this.state.startDate).format('llll')}
                    onChange={() => false}
                    onClick={this.startDateOnSave}
                />
                {
                    this.state.startDateFocus &&  <InputMoment
                        moment={this.state.startDate}
                        onChange={this.startDateOnChange}
                        onSave={this.startDateOnSave}
                    />
                }

                <span>End Date:</span>

                <input
                    type="text"
                    value={moment(this.state.endDate).format('llll')}
                    onChange={() => false}
                    onClick={this.endDateOnSave}
                />

                {this.state.endDateFocus && <InputMoment
                    moment={this.state.endDate}
                    onChange={this.endDateOnChange}
                    onSave={this.endDateOnSave}
                />}

                

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters
})

export default connect(mapStateToProps)(ExpenseListFilters)