import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { VaccinesPage } from './vaccines.page';

describe('VaccinesPage', () => {
  let component: VaccinesPage;
  let fixture: ComponentFixture<VaccinesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VaccinesPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(VaccinesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
