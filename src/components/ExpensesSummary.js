import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import 'numeral/locales/es-es';
import selectExpenses from '../selectors/expenses';
import SelectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    numeral.locale('es-es');
    const formattedExpensesTotal = numeral(expensesTotal / 100).format(
        '0,0.00$'
    );
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">
                    Viewing <span>{expenseCount} </span>
                    {expenseWord} totalling{' '}
                    <span>{formattedExpensesTotal}</span>
                </h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create">
                        Add Expense
                    </Link>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: SelectExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);
