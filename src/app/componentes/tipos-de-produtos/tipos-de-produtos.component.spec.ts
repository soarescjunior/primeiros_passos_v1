import { ComponentFixture, TestBed } from '@angular/core/testing';

  import { TipoDeProdutoComponent } from './tipos-de-produtos.component';

describe('TipoDeProdutoComponent', () => {
  let component: TipoDeProdutoComponent;
  let fixture: ComponentFixture<TipoDeProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoDeProdutoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoDeProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
