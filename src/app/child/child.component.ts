import {Component, OnInit, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ChildComponent),
    multi: true
  }]
})
export class ChildComponent implements OnInit, ControlValueAccessor {
  onChange: any = () => { };
  onTouched: any = () => { };

  private _value: any = "";

  registerOnTouched(fn) { this.onTouched = fn; }

  registerOnChange(fn) { this.onChange = fn; }

  writeValue(val) {
    if (!val){ return; }
    this._value = val;
  }

  constructor() {}

  ngOnInit(): void {}

  requestChange(val){
    this._value = val;
    this.onChange(this._value);
  }
}
