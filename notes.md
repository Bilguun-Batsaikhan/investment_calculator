## Form Module

- For form **submit** event use `(ngSubmit) = function()`
- Form Module also includes **ngModel**, so inside **input** tag use `[(ngModel)] = "propertyName"`

## From Child Component to Parent Component

- Inside the **child.ts** class we need to have an event emitter `@Output() variableName = new Event<Type>()` then we can emit the data from the child to parent like this: `this.variableName.emit()`

```javascript
 @Output() calculate = new EventEmitter<{
    initialInvestment: number;
    annualInvestment: number;
    expectedReturn: number;
    duration: number;
  }>();

 onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment,
      annualInvestment: +this.enteredAnnualInvestment,
      expectedReturn: +this.enteredExpectedReturn,
      duration: +this.enteredDuration,
    });
    console.log('Submitted!');
  }
```

- And at the receiving end **parent.ts**, we can receive it from the parent template through child selector.

```html
<app-user-input (calculate)="onCalculateInvestmentResults($event)"></app-user-input>
```

## From Parent Component to Child Component

- Inside the **child.ts** class `@Input() variableNameChild: type` to receive a data from the parent class.

_child.component.ts_

```javascript
@Input() results?: AnnualData[];
```

- Sending end **parent.html**, inside the child selector tag `[variableNameChild] = "propertyToBind"`

_parent.component.ts_

```javascript
resultsData?: AnnualData[];
```

_parent.component.html_

```html
<app-investment-results [results]="resultsData" />
```

## Undefined | Null | Type ? !

- `?` **(Optional Chaining/Modifier):** Makes things _optional_. It's about gracefully handling the possibility of `null` or `undefined`.

- `!` **(Non-null Assertion):** Makes things certain. It's about _telling_ TypeScript that you are _certain_ a value is not `null` or `undefined`, overriding the type checker's caution.

## Conditions in templates

```html
@if (boolean) {
<p>Show me</p>
} @ else {
<h1>No! Show me</h1>
}
```

## For loop in templates

The below examples demonstrates dynamic rows based on results array. The keyword `track` followed by some unique row `identifier`, in this case the property **year** is chosen.

```javascript
<tbody>
    @for (result of results; track result.year) {
    <tr>
      <td>{{ result.year }}</td>
      <td>{{ result.valueEndOfYear }}</td>
      <td>{{ result.interest }}</td>
      <td>{{ result.totalInterest }}</td>
      <td>{{ result.totalAmountInvested }}</td>
    </tr>
    }
  </tbody>
```

## Angular Pipes

Pipes are functions that let you **transform data directly** in your component templates. They take an input value and return a transformed value, making it easy to format strings, currencies, dates, and more, without changing your component's data.

- **Syntax:** Use the pipe symbol `|` followed by the pipe's name. You can chain multiple pipes together.
- **Arguments:** Pass arguments to a pipe using a colon `:` followed by the argument value.

```html
<td>{{ result.valueEndOfYear | currency:'USD':'symbol':'1.2-2' }}</td>

<td>{{ result.yearStartDate | date:'shortDate' }}</td>

<td>{{ 'total amount invested' | uppercase | slice:0:5 }}...</td>
```
