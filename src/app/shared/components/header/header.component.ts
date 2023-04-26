import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderService } from '../../services/header.service';
import { LangTraslateModule } from 'src/app/features/modules/lang-traslate/lang-traslate.module';
import { TranslateService } from "@ngx-translate/core";
import { TranslateModule } from '@ngx-translate/core';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    LangTraslateModule,
    TranslateModule,
    TranslocoModule
  ],
  providers: [TranslateService, TranslocoService],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  public switchLanguage!: string;
  public browserLanguage!: any;
  public selectedDropdown: string = "English";

  public languageList: any = [
    {
      label: 'English',
      value: 'en'
    },
    {
      label: 'German',
      value: 'de'
    },
    {
      label: 'French',
      value: 'fr'
    },
    {
      label: 'Spanish',
      value: 'es'
    },
    {
      label: 'ગુજરાતી',
      value: 'gu'
    }
  ]

  constructor(
    private headerService: HeaderService,
    private translateService: TranslateService,
    private translocoService: TranslocoService,
  ) {
    // this.headerService.selectLanguage.subscribe((res: any) => {
    //   this.switchLanguage = res
    //   console.log('this.switchLanguage :>> ', this.switchLanguage);
    // });
    this.translateService.addLangs(['de', 'en', 'fr']);
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');
    // this.browserLanguage = this.translateService.getDefaultLang();
    // console.log('this.browserLanguage :>> ', this.browserLanguage);
    // this.languageChanged()
    // this.headerService.selectLanguage.subscribe((res: any) => {
    //   this.browserLanguage = res
    //   console.log('this.browserLanguage :>> ', this.browserLanguage);
    // })
  }

  ngOnInit(): void { }

  public selectLanguage(language: any) {
    this.selectedDropdown = language.label;
    this.translateService.use(language.value);
    this.translocoService.setActiveLang(language.value);
    console.log('language :>> ', language);
  }

  // private languageChanged() {
  //   this.translateService.use(this.browserLanguage.match(/de|en|fr/) ? this.browserLanguage : 'en');
  // }

}
