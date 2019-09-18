$('#foundation-match').click(function() {
    $('input[name=foundation-capabilities]').prop('checked', true);

    var div = $('div');


      $('.solution-one').hide();
      $('.solution-two').show();
      $('.solution-three').hide();
      $('.solution-four').hide();
      $('.solution-five').hide();
      $('.solution-six').show();
      $('.solution-seven').hide();
      $('.solution-eight').hide();
      $('.solution-nine').show();
      $('.solution-ten').hide();
      $('.solution-eleven').hide();
      $('.solution-twelve').hide();
      $('.solution-thirteen').hide();
      $('.solution-fourteen').hide();
      $('.solution-fifteen').hide();
      $('.solution-sixteen').hide();
      $('.solution-seventeen').hide();
      $('.solution-eighteen').hide();
      $('.solution-nineteen').hide();
      $('.solution-twenty').hide();
      $('.matched').css('display', 'inline');
      $("input[name=non-foundation-capabilities]").attr('disabled','disabled');

      $("input[id=citizen-capabilities-1]").removeAttr('disabled').prop('checked', true);
      $("input[id=prescribing-and-dispensing-capabilities-1]").removeAttr('disabled').prop('checked', true);
      $("input[id=clinical-capabilities-2]").removeAttr('disabled').prop('checked', true);
      $("input[id=clinical-capabilities-10]").removeAttr('disabled').prop('checked', true);
      $("input[id=practise-management-capabilities-3]").removeAttr('disabled').prop('checked', true);
});

// $('input').click(function() {
//     var value = $(this).val();
//
//     if (value == "prescribing") {
//       $('.solution-one').hide();
//       $('.solution-two').hide();
//       $('.solution-three').hide();
//       $('.solution-four').show();
//       $('.solution-five').hide();
//       $('.no-results').css('display', 'none');
//     }
//     else {
//       $('.solution-one').hide();
//       $('.solution-two').hide();
//       $('.solution-three').hide();
//       $('.solution-four').hide();
//       $('.solution-five').hide();
//       $('.no-results').css('display', 'block');
//     }
// });

$('#apply-filters').click(function() {
    var val = [];
    $(':checkbox:checked').each(function(i){
      val[i] = $(this).val();

      if (val == "prescribing,prescribing"){
          $('.solution-one').hide();
          $('.solution-two').hide();
          $('.solution-three').hide();
          $('.solution-four').show();
          $('.solution-five').hide();
          $('.solution-six').hide();
          $('.solution-seven').hide();
          $('.solution-eight').hide();
          $('.solution-nine').hide();
          $('.solution-ten').hide();
          $('.solution-eleven').hide();
          $('.solution-twelve').hide();
          $('.solution-thirteen').hide();
          $('.solution-fourteen').hide();
          $('.solution-fifteen').hide();
          $('.solution-sixteen').hide();
          $('.solution-seventeen').hide();
          $('.solution-eighteen').hide();
          $('.solution-nineteen').hide();
          $('.solution-twenty').hide();
          $('.no-results').css('display', 'none');
          $('.matched').css('display', 'inline');
      }
      else if (val == "patient-information-maintenance,prescribing,recording-consultations"){
        $('.solution-one').show();
        $('.solution-two').hide();
        $('.solution-three').hide();
        $('.solution-four').hide();
        $('.solution-five').hide();
        $('.solution-six').hide();
        $('.solution-seven').hide();
        $('.solution-eight').hide();
        $('.solution-nine').hide();
        $('.solution-ten').hide();
        $('.solution-eleven').hide();
        $('.solution-twelve').hide();
        $('.solution-thirteen').hide();
        $('.solution-fourteen').hide();
        $('.solution-fifteen').hide();
        $('.solution-sixteen').hide();
        $('.solution-seventeen').hide();
        $('.solution-eighteen').hide();
        $('.solution-nineteen').hide();
        $('.solution-twenty').hide();
        $('.no-results').css('display', 'none');
        $('.matched').css('display', 'inline');
      }
      else if (val == "appointments-management-citizen,referral-management,resource-management,patient-information-maintenance,prescribing,recording-consultations,appointments-management-citizen,prescribing,recording-consultations,patient-information-maintenance,resource-management"){
        $('.solution-one').hide();
        $('.solution-two').show();
        $('.solution-three').hide();
        $('.solution-four').hide();
        $('.solution-five').hide();
        $('.solution-six').show();
        $('.solution-seven').hide();
        $('.solution-eight').hide();
        $('.solution-nine').show();
        $('.solution-ten').hide();
        $('.solution-eleven').hide();
        $('.solution-twelve').hide();
        $('.solution-thirteen').hide();
        $('.solution-fourteen').hide();
        $('.solution-fifteen').hide();
        $('.solution-sixteen').hide();
        $('.solution-seventeen').hide();
        $('.solution-eighteen').hide();
        $('.solution-nineteen').hide();
        $('.solution-twenty').hide();
        $('.no-results').css('display', 'none');
        $('.matched').css('display', 'inline');

        $("input[name=non-foundation-capabilities]").attr('disabled','disabled');

        $("input[id=citizen-capabilities-1]").removeAttr('disabled').prop('checked', true);
        $("input[id=prescribing-and-dispensing-capabilities-1]").removeAttr('disabled').prop('checked', true);
        $("input[id=clinical-capabilities-2]").removeAttr('disabled').prop('checked', true);
        $("input[id=clinical-capabilities-10]").removeAttr('disabled').prop('checked', true);
        $("input[id=practise-management-capabilities-3]").removeAttr('disabled').prop('checked', true);
        $('.matched').css('display', 'inline');
      }
      else if (val == "sms-services,sms-services"){
        $('.solution-one').hide();
        $('.solution-two').hide();
        $('.solution-three').hide();
        $('.solution-four').hide();
        $('.solution-five').hide();
        $('.solution-six').hide();
        $('.solution-seven').show();
        $('.solution-eight').hide();
        $('.solution-nine').hide();
        $('.solution-ten').hide();
        $('.solution-eleven').hide();
        $('.solution-twelve').hide();
        $('.solution-thirteen').hide();
        $('.solution-fourteen').hide();
        $('.solution-fifteen').show();
        $('.solution-sixteen').show();
        $('.solution-seventeen').hide();
        $('.solution-eighteen').hide();
        $('.solution-nineteen').hide();
        $('.solution-twenty').hide();
        $('.no-results').css('display', 'none');
        $('.matched').css('display', 'inline');
      }
      else if (val == "productivity,gp-billing,remote-monitoring,voice-recognition,sms-services,physiotherapy"){
        $('.solution-one').hide();
        $('.solution-two').hide();
        $('.solution-three').hide();
        $('.solution-four').hide();
        $('.solution-five').hide();
        $('.solution-six').hide();
        $('.solution-seven').hide();
        $('.solution-eight').show();
        $('.solution-nine').hide();
        $('.solution-ten').hide();
        $('.solution-eleven').show();
        $('.solution-twelve').show();
        $('.solution-thirteen').show();
        $('.solution-fourteen').show();
        $('.solution-fifteen').hide();
        $('.solution-sixteen').hide();
        $('.solution-seventeen').hide();
        $('.solution-eighteen').hide();
        $('.solution-nineteen').hide();
        $('.solution-twenty').hide();
        $('.no-results').css('display', 'none');
        $('.matched').css('display', 'inline');
      }
      else if (val == "gp-billing,gp-billing"){
        $('.solution-one').hide();
        $('.solution-two').hide();
        $('.solution-three').hide();
        $('.solution-four').hide();
        $('.solution-five').hide();
        $('.solution-six').hide();
        $('.solution-seven').hide();
        $('.solution-eight').hide();
        $('.solution-nine').hide();
        $('.solution-ten').hide();
        $('.solution-eleven').show();
        $('.solution-twelve').hide();
        $('.solution-thirteen').hide();
        $('.solution-fourteen').hide();
        $('.solution-fifteen').hide();
        $('.solution-sixteen').hide();
        $('.solution-seventeen').hide();
        $('.solution-eighteen').hide();
        $('.solution-nineteen').hide();
        $('.solution-twenty').hide();
        $('.no-results').css('display', 'none');
        $('.matched').css('display', 'inline');
      }
      else if (val == "remote-monitoring,remote-monitoring"){
        $('.solution-one').hide();
        $('.solution-two').hide();
        $('.solution-three').hide();
        $('.solution-four').hide();
        $('.solution-five').hide();
        $('.solution-six').hide();
        $('.solution-seven').hide();
        $('.solution-eight').hide();
        $('.solution-nine').hide();
        $('.solution-ten').hide();
        $('.solution-eleven').hide();
        $('.solution-twelve').show();
        $('.solution-thirteen').hide();
        $('.solution-fourteen').hide();
        $('.solution-fifteen').hide();
        $('.solution-sixteen').hide();
        $('.solution-seventeen').hide();
        $('.solution-eighteen').hide();
        $('.solution-nineteen').hide();
        $('.solution-twenty').hide();
        $('.no-results').css('display', 'none');
        $('.matched').css('display', 'inline');
      }
      else if (val == "voice-recognition,voice-recognition"){
        $('.solution-one').hide();
        $('.solution-two').hide();
        $('.solution-three').hide();
        $('.solution-four').hide();
        $('.solution-five').hide();
        $('.solution-six').hide();
        $('.solution-seven').hide();
        $('.solution-eight').hide();
        $('.solution-nine').hide();
        $('.solution-ten').hide();
        $('.solution-eleven').hide();
        $('.solution-twelve').hide();
        $('.solution-thirteen').show();
        $('.solution-fourteen').hide();
        $('.solution-fifteen').hide();
        $('.solution-sixteen').hide();
        $('.solution-seventeen').hide();
        $('.solution-eighteen').hide();
        $('.solution-nineteen').hide();
        $('.solution-twenty').hide();
        $('.no-results').css('display', 'none');
        $('.matched').css('display', 'inline');
      }
      else if (val == "physiotherapy,physiotherapy"){
        $('.solution-one').hide();
        $('.solution-two').hide();
        $('.solution-three').hide();
        $('.solution-four').hide();
        $('.solution-five').hide();
        $('.solution-six').hide();
        $('.solution-seven').hide();
        $('.solution-eight').hide();
        $('.solution-nine').hide();
        $('.solution-ten').hide();
        $('.solution-eleven').hide();
        $('.solution-twelve').hide();
        $('.solution-thirteen').hide();
        $('.solution-fourteen').show();
        $('.solution-fifteen').hide();
        $('.solution-sixteen').hide();
        $('.solution-seventeen').hide();
        $('.solution-eighteen').hide();
        $('.solution-nineteen').hide();
        $('.solution-twenty').hide();
        $('.no-results').css('display', 'none');
        $('.matched').css('display', 'inline');
      }
      else if (val == "care-homes"){
        $('.solution-one').hide();
        $('.solution-two').hide();
        $('.solution-three').hide();
        $('.solution-four').hide();
        $('.solution-five').hide();
        $('.solution-six').hide();
        $('.solution-seven').hide();
        $('.solution-eight').hide();
        $('.solution-nine').hide();
        $('.solution-ten').hide();
        $('.solution-eleven').hide();
        $('.solution-twelve').hide();
        $('.solution-thirteen').hide();
        $('.solution-fourteen').hide();
        $('.solution-fifteen').hide();
        $('.solution-sixteen').hide();
        $('.solution-seventeen').show();
        $('.solution-eighteen').show();
        $('.solution-nineteen').show();
        $('.solution-twenty').show();
        $('.no-results').css('display', 'none');
        $('.matched').css('display', 'inline');
      }
      else {
        $('.solution-one').hide();
        $('.solution-two').hide();
        $('.solution-three').hide();
        $('.solution-four').hide();
        $('.solution-five').hide();
        $('.solution-six').hide();
        $('.solution-seven').hide();
        $('.solution-eight').hide();
        $('.solution-nine').hide();
        $('.solution-ten').hide();
        $('.solution-eleven').hide();
        $('.solution-twelve').hide();
        $('.solution-thirteen').hide();
        $('.solution-fourteen').hide();
        $('.solution-fifteen').hide();
        $('.solution-sixteen').hide();
        $('.solution-seventeen').hide();
        $('.solution-eighteen').hide();
        $('.solution-nineteen').hide();
        $('.solution-twenty').hide();
        $('.no-results').css('display', 'block');
        $('.matched').css('display', 'inline');
      }
    });
});

$('input[value=appointments-management-citizen]').click(function() {
  $("input[value=appointments-management-citizen]").prop('checked', true);
});

$('input[value=resource-management]').click(function() {
  $("input[value=resource-management]").prop('checked', true);
});

$('input[value=referral-management]').click(function() {
  $("input[value=referral-management]").prop('checked', true);
});

$('input[value=patient-information-maintenance]').click(function() {
  $("input[value=patient-information-maintenance]").prop('checked', true);
});

$('input[value=prescribing]').click(function() {
  $("input[value=prescribing]").prop('checked', true);
});

$('input[value=recording-consultations]').click(function() {
  $("input[value=recording-consultations]").prop('checked', true);
});

$('input[value=productivity]').click(function() {
  $("input[id=productivity-capabilities-1]").prop('checked', true);
  $("input[id=productivity-capabilities-2]").prop('checked', true);
  $("input[id=productivity-capabilities-3]").prop('checked', true);
  $("input[id=productivity-capabilities-4]").prop('checked', true);
  $("input[id=productivity-capabilities-5]").prop('checked', true);
});

$('input[value=gp-billing]').click(function() {
  $("input[value=gp-billing]").prop('checked', true);
});

$('input[value=remote-monitoring]').click(function() {
  $("input[value=remote-monitoring]").prop('checked', true);
});

$('input[value=voice-recognition]').click(function() {
  $("input[value=voice-recognition]").prop('checked', true);
});

$('input[value=sms-services]').click(function() {
  $("input[value=sms-services]").prop('checked', true);
});

$('input[value=physiotherapy]').click(function() {
  $("input[value=physiotherapy]").prop('checked', true);
});
