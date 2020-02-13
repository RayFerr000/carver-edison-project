import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';

import '../App.css';
import 'rc-slider/assets/index.css';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
})

function ExpenseReport({ name }) {
  const [salary, setSalary] = useState(0);
  const [submittedReport, setSubmittedReport] = useState(false);
  const [expensePercentage, setExpensePercentage] = useState(15);

  // If expensePercentage === 0, then savingsAmount = savings
  const expenseAmount = (salary/12) * (expensePercentage/100);
  const savingsAmount = expensePercentage ? (salary/12) * ((100 - expensePercentage) / 100) : salary;

  return(
    <div className="expense-report">
      <h4>{ submittedReport ? 'Thank You' : 'Welcome to your monthly budget' } {name}</h4>
      {
        !submittedReport
        ?
          <div className="slider-section">
            <p>Expense Percentage: {expensePercentage}%</p>
            <Slider
              min={0}
              max={30}
              defaultValue={15}
              onChange={(sliderValue) => setExpensePercentage(sliderValue)}
            />
          </div>
        :
          <Row className="margin-10">
            <Col sm={6}>
              <span>Expense Percent</span>
            </Col>
            <Col sm={6}>
              <span>{expensePercentage}%</span>
            </Col>
          </Row>
      }
      <Row className="margin-10">
        <Col sm={6}>
          <span>Your Salary</span>
        </Col>
        <Col sm={6}>
          {
            !submittedReport
            ?
              <input
                placeholder="100000.00"
                onChange={(e) => setSalary(e.target.value)}
              />
            :
              <span>{formatter.format(salary)}</span>
          }
        </Col>
      </Row>
      <Row className="margin-10">
        <Col sm={6}>
          <span>Your Expenses</span>
        </Col>
        <Col sm={6}>
          <span>{formatter.format(expenseAmount)}</span>
        </Col>
      </Row>
      <Row className="margin-10">
        <Col sm={6}>
          <span>Your Savings</span>
        </Col>
        <Col sm={6}>
          <span>{formatter.format(savingsAmount)}</span>
        </Col>
      </Row>
      {
        !submittedReport
        &&
        <div className="button-section">
          <Button
            disabled={salary === 0 ? true : false}
            onClick={() => setSubmittedReport(true)}
          >Submit
          </Button>
        </div>
      }
    </div>
  );
}

ExpenseReport.propTypes = {
  name: PropTypes.string,
};

export default ExpenseReport;
