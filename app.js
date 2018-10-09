var express = require('express')
var path = require('path');

var app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/index.html'));
});

app.get('/design1', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/programs/design_1.html'));
  });

  app.get('/programs/submissions/incomplete.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/programs/submissions/incomplete.html'));
  });

  
  app.get('/programs/submissions/complete.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/programs/submissions/complete.html'));
  });

  
  app.get('/programs/submissions/all.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/programs/submissions/all.html'));
  });

  
  app.get('/programs/submissions/details.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/programs/submissions/details.html'));
  });


  
  app.get('/programs/submissions/pending.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/programs/submissions/pending.html'));
  });

  
  app.get('/programs/submissions/reports.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/programs/submissions/reports.html'));
  });

  app.get('/programs/top_menu.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/programs/top_menu.html'));
  });


  app.get('/programs/submission_form/submission_form.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/programs/submission_form/submission_form.html'));
  });

  app.get('/programs/general_informaion.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/programs/general_informaion.html'));
  });

  
  app.get('/programs/goals.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/programs/goals.html'));
  });

  
  app.get('/programs/form_settings.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/programs/form_settings.html'));
  });

  app.get('/programs/name.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/programs/name.html'));
  });

  app.get('/programs/pdf_Settings.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/programs/PDF_Settings.html'));
  });

  
  app.get('/programs/workflow.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/programs/workflow.html'));
  });

  app.get('/programs/copying_submissions.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/programs/copying_submissions.html'));
  });

  
  app.get('/programs/advanced/email_configuration.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/programs/advanced/email_configuration.html'));
  });

  app.get('/programs/advanced/invoice_configuraion.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/programs/advanced/invoice_configuraion.html'));
  });

  app.get('/programs/advanced/payment_configuration.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/programs/advanced/payment_configuration.html'));
  });

  
  app.get('/programs/advanced/system_phrase.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/programs/advanced/system_phrase.html'));
  });

  
  app.get('/programs/judge_settings/form_settings.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/programs/judge_settings/form_settings.html'));
  });

  
  app.get('/programs/judge_settings/pdf_settings.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/programs/judge_settings/pdf_settings.html'));
  });

  
  app.get('/programs/judge_settings/profile.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/programs/judge_settings/profile.html'));
  });

  
  app.get('/programs/scheduler/time_slots.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/programs/scheduler/time_slots.html'));
  });


  
  app.get('/programs/scheduler/rooms.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/programs/scheduler/rooms.html'));
  });

  
  app.get('/programs/scheduler/days.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/programs/scheduler/days.html'));
  });

  app.get('/programs/scheduler/timezone.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/programs/scheduler/timezone.html'));
  });

  
  app.get('/programs/scheduler/conflicts.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/programs/scheduler/conflicts.html'));
  });

  
  app.get('/programs/sessions/session_types.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/programs/sessions/session_types.html'));
  });

  
  app.get('/programs/sessions/other_time.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/programs/sessions/other_time.html'));
  });
  
  app.get('/programs/sessions/general.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/programs/sessions/general.html'));
  });

  
  app.get('/programs/sessions/agenda_conditions.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/programs/sessions/agenda_conditions.html'));
  });

app.get('/programs/permission/admins.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/programs/permission/admins.html'));
});


app.get('/programs/permission/public_access.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/programs/permission/public_access.html'));
});


app.get('/programs/create.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/programs/create.html'));
});



app.get('/programs/settings/numbering_and_dates.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/programs/settings/numbering_and_dates.html'));
});

app.get('/programs/settings/default_emails.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/programs/settings/default_emails.html'));
});

app.get('/programs/settings/invoice_template.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/programs/settings/invoice_template.html'));
});

app.get('/programs/settings/form_field_templates.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/programs/settings/form_field_templates.html'));
});

app.get('/programs/settings/themes.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/programs/settings/themes.html'));
});

app.get('/programs/settings/login_configuration.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/programs/settings/login_configuration.html'));
});

app.get('/programs/settings/payment_configuration.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/programs/settings/payment_configuration.html'));
});

app.get('/programs/settings/privacy.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/programs/settings/privacy.html'));
});

app.get('/programs/settings/email_configuration.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/programs/settings/email_configuration.html'));
});

app.get('/programs/settings/license_and_usage.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/programs/settings/license_and_usage.html'));
});

app.get('/programs/settings/openwater_invoices.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/programs/settings/openwater_invoices.html'));
});

app.get('/website/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/website/index.html'));
});

app.get('/website/manage_website.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/website/manage_website.html'));
});


app.get('/website/homepage.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/website/homepage.html'));
});


app.get('/website/theme.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/website/theme.html'));
});


app.get('/website/look_and_feel.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/website/look_and_feel.html'));
});

app.get('/website/social.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/website/social.html'));
});

app.get('/website/manage_home_page.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/website/manage_home_page.html'));
});


app.get('/website/system_content.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/website/system_content.html'));
});



app.get('/crm/list_people.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/crm/list_people.html'));
});


app.get('/crm/list_companies.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/crm/list_companies.html'));
});





app.get('/crm/people_details.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/crm/people_details.html'));
});



app.get('/crm/company_details.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/crm/company_details.html'));
});

app.get('/crm/invoices.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/crm/invoices.html'));
});

app.get('/crm/invoice_details.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/crm/invoice_details.html'));
});

app.get('/crm/reports.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/crm/reports.html'));
});

app.get('/categories/all.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/programs/categories/all.html'));
});



app.get('/categories/category_groups.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/programs/categories/category_groups.html'));
});


app.get('/categories/scoring_groups.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/programs/categories/scoring_groups.html'));
});

app.get('/programs/form_settings/eligibility_rules.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/programs/form_settings/eligibility_rules.html'));
});













  
  

var port_number = app.listen(process.env.PORT || 3000);
app.listen(port_number);

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!')
// });
