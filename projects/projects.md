---
layout: layouts/home.njk
title: Projects
templateClass: tmpl-post
eleventyNavigation:
  key: Projects
  order: 2
---
<!-- JavaScript Projects starts here -->
<div class="text-center">
  <h1>JavaScript Projects</h1>
  <hr>
</div>
<div class="row">
<!-- Tip Calculator Starts here -->
  <div class="col-lg-4">
    <form class="form-control form-signin">
      <h2>Tip Calculator</h2>
      <p>Enter your bill amount and select the percentage of tip you would like to give. If there is only one person paying, you can either leave the number of people blank or enter 1.</p>
      <hr>
      <label>Bill amount<br>
        <span>£ </span><input id="billamt" type="text" placeholder="Bill amount">
      </label>
      <label>How much tip would you like to give?<br>
        <select id="serviceQual">
          <option disabled selected value="0">Choose an percentage</option>
          <option value="0.05">5&#37;</option>
          <option value="0.1">10&#37;</option>
          <option value="0.15">15&#37;</option>
          <option value="0.3">30&#37;</option>
          <option value="0.4">40&#37;</option>
          <option value="0.5">50&#37;</option>
        </select>
      </label>
      <label>How many people are sharing the bill?
        <input id="peopleamt" type="text" placeholder="Number of People">
      </label>
      <button class="btn" type="button" id="calculate">Calculate!</button>
<!--calculator end-->
      <div id="totalTip">
        <h5 id="each">You will each pay a tip of:</h5>
        <h2><sup>£</sup><span id="tip">0.00</span> </h2>
      </div>
    </form>
  </div>
</div>
<!-- Tip Calculator Ends here -->
<!-- JavaScript Projects ends here -->
<script src="/js/projects.js"></script>
