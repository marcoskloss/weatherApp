export function condition(condition, hasOutline = true) {
  function verifyOutline(hasOutline) {
    if (hasOutline) {
      return {outline: '-outline', color: '#1ec9ff'}
    } 

    return {outline: '', color: '#e8f0ff'}
  }

  const iconProps = verifyOutline(hasOutline)

  switch(condition) {
    case 'storm':
      return icon = {
        name: `rainy${iconProps.outline}`,
        color: iconProps.color
      } 

    case 'clear_day':
      return icon = {
        name: `sunny${iconProps.outline}`,
        color: '#ffb300'
      } 

    case 'rain':
      return icon = {
        name: `rainy${iconProps.outline}`,
        color: iconProps.color
      }

    case 'snow':
      return icon = {
        name: `snow${iconProps.outline}`,
        color: iconProps.color
      }

    case 'fog': 
      return icon = {
        name: `partly-sunny${iconProps.outline}`,
        color: iconProps.color
      }
      
    default: 
      return icon = {
        name: `cloud${iconProps.outline}`,
        color: iconProps.color
      } 
  }
}